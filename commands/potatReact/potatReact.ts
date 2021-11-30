import { Client, Message } from "discord.js";

export default function potatReact(client: Client, message: Message) {
  if (message.author.id === "178623819223662592") {
    const mentioned = message.mentions.members;
    if (mentioned && mentioned.size && message.guild) {
      const emoji = message.guild.emojis.cache.find(
        (e) => e.name === "angyping"
      );
      if (emoji) {
        message.react(emoji);
      }
    }
  }
  return false;
}
