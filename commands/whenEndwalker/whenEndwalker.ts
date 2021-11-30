import { formatDuration, intervalToDuration } from "date-fns";
import { Message } from "../../models/message";

const ENDWALKER_START = new Date(2021, 11, 3, 1);
const SAVAGE_START = new Date(2021, 0, 4, 1);

export default function whenEndwalker(message: Message) {
  if (
    message.hasWord("when") &&
    (message.hasWord("ew") || message.hasWord("endwalker"))
  ) {
    if (message.hasWord("savage")) {
      message.respond(
        `Endwalker savage releases on Jan 4th, ${formatDuration(
          intervalToDuration({
            start: new Date(),
            end: SAVAGE_START,
          }),
          { delimiter: ", " }
        )} from today`
      );
      return true;
    } else {
      message.respond(
        `Endwalker releases in ${formatDuration(
          intervalToDuration({
            start: new Date(),
            end: ENDWALKER_START,
          }),
          { delimiter: ", " }
        )}`
      );
      return true;
    }
  }
  return false;
}
