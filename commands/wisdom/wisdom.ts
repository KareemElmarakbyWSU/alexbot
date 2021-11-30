import { Message } from "../../models/message";
import { quotes } from "./quotes";

export default function wisdom(message: Message) {
  if (message.hasWord("wisdom")) {
    message.respond(
      `> Confucius says: ${quotes[Math.floor(Math.random() * 100)]}`
    );
    return true;
  }
  return false;
}
