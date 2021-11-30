import { Client, Intents, Message, TextChannel } from "discord.js";

class Discord {
  client: Client;

  constructor() {
    this.client = new Client({
      intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
      ],
    });
  }

  respond(message: Message, response: string) {
    (this.client.channels.cache.get(message.channelId) as TextChannel).send(
      response
    );
  }

  react(message: Message, reaction: string) {
    if (!message.guild) {
      return;
    }

    const emoji = message.guild.emojis.cache.find((e) => e.name === reaction);
    if (emoji) {
      message.react(emoji);
    }
  }
}

export const discord = new Discord();
