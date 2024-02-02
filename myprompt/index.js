import BodyOfKnowledgeIE from "./BoKIE.js";
import StateOfTheArt, { MatchSoA, SimplifiedSoA } from "./StateoftheArt.js";
import AgileMethod from "./agile.js";
import BackgroundChat from "./background.js";
import Cites from "./citation.js";
import General from "./general.js";
import Knowledge from "./knowledge.js";
import Paraphrase from "./paraphrase.js";
import QFDProcess from "./qfd.js";
import Theory from "./theory.js";

/**
 * **Router Chats Prompt**
 */
const MyChats = Paraphrase;

/**
 * @type { import("@interfaces").Metadata }
 */
export const MyMetadata = {
  fileName: "paraphrase",
  contextName: "paraphrase-ctx",
};

export default MyChats;
