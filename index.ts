import dotenv from "dotenv";
import { commands } from "./commands/commands";
import { client } from "./models/client";
import { Message } from "./models/message";

dotenv.config();

client.on("messageCreate", function (message) {
  for (const command of commands) {
    if (command(new Message(message))) {
      return;
    }
  }
});

client.login(process.env.DISCORD_CLIENT_SECRET);
