import { Client, Message, TextChannel } from "discord.js";

export default function raidToday(client: Client, message: Message) {
  if (message.content.toLowerCase().includes("do we raid today")) {
    (client.channels.cache.get(message.channelId) as TextChannel).send("no");
    return true;
  }
  return false;
}
