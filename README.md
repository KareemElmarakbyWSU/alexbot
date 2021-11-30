# Alex Bot

I was bored on a random Saturday and decided to make this bot. Now my static uses it to troll me.

## Development

1. Create your own bot https://www.freecodecamp.org/news/create-a-discord-bot-with-python/
2. Give the bot "Administrator" permissions.
3. Invite the bot to one of your servers (I'd recommend creating your own Discord server for bot development.)
4. Create a file named .env at the root level of this directory, add a line DISCORD_CLIENT_SECRET=your_token_here
5. Install dependencies with `npm install`, then `npm start` to start the server.

Some functionality requires FFLogs API access as well:

1. Create an FFLogs V2 client: https://www.fflogs.com/api/clients/
2. In the .env file, add lines for FFLOGS_CLIENT_ID and FFLOGS_CLIENT_SECRET
