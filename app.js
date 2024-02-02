"use strict";

import { writeFileSync } from "fs";
import generateCompletions from "./handler.js";
import Chats, { MyMetadata } from "./myprompt/index.js";
import chalk from "chalk";
import prettyMs from "pretty-ms";

/**
 * @type { import("@interfaces").Metadata }
 */
const metadata = MyMetadata;

console.info(chalk.yellowBright("Connecting..."));

const startTime = new Date();

generateCompletions(Chats, {
  fileName: metadata.fileName,
  contextName: metadata.contextName,
})
  .then((completions) => {
    const endTime = new Date();
    const elapsedTime = prettyMs(endTime - startTime);

    writeFileSync("./test/data.json", JSON.stringify(completions, null, 2));

    const {
      id,
      created,
      model,
      usage: { prompt_tokens, completion_tokens, total_tokens },
      data: { finish_reason },
      fileLocation,
      fileName,
      totalToken,
    } = completions;

    const logs =
      `┏━[ ${chalk.whiteBright("LOG - GPT TERMINAL - 16K TOKEN")} ]\n` +
      `┃ Id                 : ${chalk.whiteBright(id)}\n` +
      `┃ Created            : ${chalk.whiteBright(created)}\n` +
      `┃ Model              : ${chalk.blueBright(model)}\n` +
      `┃ Elapsed Time       : ${chalk.magentaBright(elapsedTime)}\n` +
      `┃ Prompt Token       : ${chalk.redBright(prompt_tokens)} tokens\n` +
      `┃ Completion Token   : ${chalk.yellowBright(
        completion_tokens
      )} tokens\n` +
      `┃ Total Token        : ${chalk.greenBright(total_tokens)} tokens\n` +
      `┃ Finish Reason      : ${chalk.blueBright(finish_reason)}\n` +
      `┣━\n` +
      `┃ Token in Context   : ${chalk.magentaBright(totalToken)} tokens\n` +
      `┃ Context            : ${chalk.cyanBright(metadata.contextName)}\n` +
      `┃ File Name          : ${chalk.cyanBright(fileName)}\n` +
      `┃ Path File          : ${chalk.cyanBright(fileLocation)}\n` +
      `┗━[ ${chalk.whiteBright("LOG - GPT TERMINAL - 16K TOKEN")} ]\n`;
    console.log(logs);
  })
  .catch((err) => {
    console.error(err);
  });
