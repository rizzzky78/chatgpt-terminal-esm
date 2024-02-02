import openai from "../api/index.js";

import fs from "fs/promises";
import path from "path";

const speechFile = path.resolve("./speech.mp3");

const message = `If everyone who downloads module-alias would donate just $1, I would be a millionaire in 1 week! I love contributing to open source, for free, but you know, sometimes, in the middle of the night, I may wan to eat. There are some improvements planned for module-alias and your donations will help a lot to make it happen faster.`;

async function main() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "onyx",
    input: message,
  });
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.writeFile(speechFile, buffer);
}
main()
  .then(() => {
    console.info("sucess!");
  })
  .catch((e) => {
    console.error(e);
  });
