import { ChatCompletionMessageParam } from "openai/resources";

type RoleConstructor = "user" | "assistant" | "system";

type Role = "user" | "assistant" | "system";

export type Chat = {
  /**
   * The role header of message can be:
   * **user**, **assistant**, or **system**.
   */
  role: Role;
  /**
   * Content of message
   */
  content: string;
};

export type TPromptConstructor = ChatCompletionMessageParam;

export type TPromptContainer = {
  role: "user" | "assistant" | "system";
  content: string;
};

/**
 * Metadata Context
 */
export type Metadata = {
  /**
   * File Name - Format: `date_fileName` example `16jul_MyFileName`
   */
  fileName: string;
  /**
   * Context Name - Format: `name-of-context` example `my-context`
   */
  contextName: string;
};
