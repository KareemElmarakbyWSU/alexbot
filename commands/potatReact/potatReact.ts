import { Message } from "../../models/Message";

export default function potatReact(message: Message) {
  if (message.isByAuthor("178623819223662592") && message.hasMentions()) {
    message.react("angyping");
  }
  return false;
}
