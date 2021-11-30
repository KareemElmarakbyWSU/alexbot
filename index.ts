import fs from "fs";
import { commands } from "./commands/commands";
import { discord } from "./discord";

const CLIENT_SECRET = fs.readFileSync("./.CLIENT_SECRET", "utf8");

discord.client.on("messageCreate", function (message) {
  for (const command of commands) {
    if (command(message)) {
      return;
    }
  }
});

discord.client.login(CLIENT_SECRET);
