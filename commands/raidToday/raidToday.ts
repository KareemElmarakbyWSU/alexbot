import { Message } from "discord.js";
import { discord } from "../../discord";

export default function raidToday(message: Message) {
  if (message.content.toLowerCase().includes("do we raid today")) {
    discord.respond(message, "no");
    return true;
  }
  return false;
}
