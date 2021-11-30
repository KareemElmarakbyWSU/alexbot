import fs from "fs";
import { Client, Intents } from "discord.js";
import { commands } from "./commands/commands.js";

const CLIENT_SECRET = fs.readFileSync("./.CLIENT_SECRET", "utf8");

const client = new Client({
  intents: Object.keys(Intents.FLAGS),
});

client.on("messageCreate", function (message) {
  for (const command of commands) {
    if (command(client, message)) {
      return;
    }
  }
});

client.login(CLIENT_SECRET);
