# Discord bot base

## Installation

1. Create an `.env` file in the root directory and add your private bot token
to it

  *Get your token at the
  [discord developer portal](https://discord.com/developers/).*

  `.env` example:

  ```typescript
  BOT_TOKEN="your_private_bot_token"
  ```

2. `npm install`
3. `npm run dev`

## NPM Scripts

| Script        | Description                                        |
|---------------|----------------------------------------------------|
| `dev`         | Start a development version of the bot.            |
| `build`       | Build the bot.                                     |
| `build:start` | Build then serve the bot from the build directory. |
| `start`       | Serve the bot from the build directory.            |
| `lint`        | Check for linting warnings and errors with ESLint. |
| `format`      | Format using prettier.                             |

## Useful links

- [Discord.js docs](https://discord.js.org/#/docs/main/stable/general/welcome)
- [Discord.ts docs](https://discord-ts.js.org/docs/installation)
