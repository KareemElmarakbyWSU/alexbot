import { Message } from "discord.js";
import { discord } from "../../discord";
import { quotes } from "./quotes";

export default function wisdom(message: Message) {
  if (message.content.toLowerCase().includes("wisdom")) {
    discord.respond(
      message,
      `> Confucius says: ${quotes[Math.floor(Math.random() * 100)]}`
    );
    return true;
  }
  return false;
}
