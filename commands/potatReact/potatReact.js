export default function potatReact(client, message) {
    if (message.author.id === '178623819223662592') {
        if (message.mentions.members.size) {
            message.react(
                message.guild.emojis.cache.find(e => e.name === 'angyping')
            )
        }
    }
  }
  