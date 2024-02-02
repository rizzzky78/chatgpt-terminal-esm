import fs from "fs/promises";
import { readFileSync, writeFileSync } from "fs";
import Chats from "./myprompt/index.js";
import openai from "./api/index.js";

/**
 *
 * @param { import("@interfaces").TPromptContainer[] } chats
 * @returns
 */
async function chatRequest(chats) {
  const completions = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    messages: chats,
    // temperature: 1.2,
    // top_p: 1,
    user: "Rizuky",
  });
  const { id, choices, created, model, usage } = completions;
  const { index, finish_reason, logprobs, message } = choices[0];
  return {
    completions,
    mapped: {
      id,
      created,
      model,
      usage,
      data: {
        index,
        message,
        finish_reason,
        logprobs,
      },
    },
  };
}

/**
 *
 * @param { import("@interfaces").TPromptContainer[] } chats
 * @param { number } nRequest
 */
async function multiChatRequest(chats, nRequest) {
  const { usage, choices } = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    messages: chats,
    // temperature: 1.2,
    // top_p: 1,
    user: "Rizuky",
    n: nRequest,
  });
  return {
    usage,
    data: choices,
  };
}

function getDate() {
  const fileNameDate = new Date()
    .toLocaleDateString("en", {
      weekday: "short",
      month: "short",
      day: "2-digit",
    })
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(",", "");
  return fileNameDate;
}

/**
 *
 * @param { import(".").TPromptContainer[] } chats
 * @param { import(".").Metadata } metadata
 */
export default async function generateCompletions(chats, metadata) {
  const { completions, mapped } = await chatRequest(chats);
  const {
    id,
    created,
    model,
    usage: { prompt_tokens, completion_tokens, total_tokens },
    data: { index, message, finish_reason, logprobs },
  } = mapped;

  const thisDate = getDate();

  const pathDir = {
    document: `./data/document/${thisDate}`,
    context: `./data/context/${thisDate}`,
  };

  try {
    await fs.access(pathDir.context);
    await fs.access(pathDir.document);
  } catch {
    await fs.mkdir(pathDir.context, { recursive: true });
    await fs.mkdir(pathDir.document, { recursive: true });
  }

  /**
   * @type { import("@interfaces").TPromptContainer[] }
   */
  const userChats = [...Chats, { role: "assistant", content: message.content }];

  // Check if the folder exists, if not create it

  const pathFileContext = `${pathDir.context}/ctx-${metadata.contextName}.json`;
  const fileName = `${metadata.fileName}-${userChats.length}.txt`;
  const pathFileDocument = `${pathDir.document}/${fileName}`;

  await fs.writeFile(pathFileContext, JSON.stringify(userChats, null, 2));
  await fs.writeFile(pathFileDocument, message.content);

  /**
   * @type { import("openai/resources").ChatCompletion[] }
   */
  const prevLogs = JSON.parse(readFileSync("./json/log.json", "utf-8"));
  prevLogs.push(completions);
  const totalToken = prevLogs.reduce(
    (val, data) => val + data.usage.total_tokens,
    0
  );

  writeFileSync("./json/log.json", JSON.stringify(prevLogs, null, 2));

  return {
    ...mapped,
    fileName,
    fileLocation: pathFileDocument,
    totalToken,
  };
}
