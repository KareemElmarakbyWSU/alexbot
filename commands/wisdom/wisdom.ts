import { Client, Message, TextChannel } from "discord.js";
import { quotes } from "./quotes";

export default function wisdom(client: Client, message: Message) {
  if (message.content.toLowerCase().includes("wisdom")) {
    (client.channels.cache.get(message.channelId) as TextChannel).send(
      `> Confucius says: ${quotes[Math.floor(Math.random() * 100)]}`
    );
    return true;
  }
  return false;
}
