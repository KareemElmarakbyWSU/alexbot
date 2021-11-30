export default function raidToday(client, message) {
  if (message.content.toLowerCase().includes("do we raid today")) {
    client.channels.cache.get(message.channelId).send("no");
  }
}
