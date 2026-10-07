import { query } from "@anthropic-ai/claude-agent-sdk";
import chalk from "chalk";
import { handleMessage, MessageHandlerOptions } from "./message-handler.js";
import { buildModeOptions, CliMode } from "./modes.js";

export type RunQueryOptions = {
  mode?: CliMode;
  verbose?: boolean;

}
export async function runQuery(prompt: string, options: RunQueryOptions = {} ) {
  try {
    const {verbose = false , mode = "agent"} = options;
    for await (const message of query({
      prompt,
      options: buildModeOptions(mode),
    })) {
        // if(message.type === "result" && message.subtype === "success"){
        //     console.log(message.result);
        // }

        handleMessage(message, {verbose});


    }
  } catch (error) {
    console.error(chalk.red("Query failed:"), error);
  }
}