import fs from "fs";

const quotes = fs
  .readFileSync(new URL("wisdom.txt", import.meta.url), "utf8")
  .split("\r\n");

export default function wisdom(client, message) {
  if (message.content.toLowerCase().indexOf("wisdom") !== -1) {
    client.channels.cache
      .get(message.channelId)
      .send(`> Confucius says: ${quotes[Math.floor(Math.random() * 100)]}`);
  }
}
