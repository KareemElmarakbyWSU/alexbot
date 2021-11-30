import { Message } from "../../models/message";

export default function raidToday(message: Message) {
  if (message.hasTextMatch("do we raid today")) {
    message.respond("no");
    return true;
  }
  return false;
}
