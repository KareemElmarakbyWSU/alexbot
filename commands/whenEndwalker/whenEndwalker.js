import { formatDuration, intervalToDuration } from "date-fns";

const ENDWALKER_START = new Date(2021, 11, 3, 1);
const SAVAGE_START = new Date(2021, 0, 4, 1);

export default function whenEndwalker(client, message) {
  const set = new Set(
    message.content
      .toLowerCase()
      .split(" ")
      .map((s) => s.replace(/[^a-z]/gi, ""))
  );

  if (set.has("when") && (set.has("ew") || set.has("endwalker"))) {
    if (set.has("savage")) {
      client.channels.cache.get(message.channelId).send(
        `Endwalker savage releases on Jan 4th, ${formatDuration(
          intervalToDuration({
            start: new Date(),
            end: SAVAGE_START,
          }),
          { delimiter: ", " }
        )} from today`
      );
    } else {
      client.channels.cache.get(message.channelId).send(
        `Endwalker releases in ${formatDuration(
          intervalToDuration({
            start: new Date(),
            end: ENDWALKER_START,
          }),
          { delimiter: ", " }
        )}`
      );
    }
  }
}
