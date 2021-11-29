export default function raidToday(client, message) {
  if (message.content.toLowerCase().indexOf("do we raid today") !== -1) {
    client.channels.cache.get(message.channelId).send("no");
  }
}
