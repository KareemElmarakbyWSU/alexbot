import fs from "fs";
import { commands } from "./commands/commands";
import { client } from "./models/client";
import { Message } from "./models/message";

const CLIENT_SECRET = fs.readFileSync("./.CLIENT_SECRET", "utf8");

client.on("messageCreate", function (message) {
  for (const command of commands) {
    if (command(new Message(message))) {
      return;
    }
  }
});

client.login(CLIENT_SECRET);
