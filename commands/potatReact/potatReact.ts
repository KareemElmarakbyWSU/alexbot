import { Message } from "discord.js";
import { discord } from "../../models/discord";

export default function potatReact(message: Message) {
  if (message.author.id === "178623819223662592") {
    const mentioned = message.mentions.members;
    if (mentioned && mentioned.size) {
      discord.react(message, "angyping");
    }
  }
  return false;
}
