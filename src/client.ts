import type { Interaction, Message } from 'discord.js'
import 'reflect-metadata'
import dotenv from 'dotenv'
import { Intents } from 'discord.js'
import { Client } from 'discordx'
import { importx } from '@discordx/importer'

// Load .env file
dotenv.config()

const client = new Client({
  simpleCommand: {
    prefix: '!'
  },
  // Determines what information the bot will receive from Discord
  // See https://discord-ts.js.org/docs/general/client/#intents-1
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_VOICE_STATES
  ],
  silent: true
})

client.once('ready', async () => {
  // Init all application commands
  await client.initApplicationCommands({
    guild: { log: true },
    global: { log: true }
  })

  // Init permissions. Enable log to see changes
  await client.initApplicationPermissions(true)

  const green = '\x1b[32m'
  const reset = '\x1b[0m'

  // eslint-disable-next-line no-console
  console.info(`${green}🤖 Bot started!${reset}`)
})

client.on('interactionCreate', (interaction: Interaction) => {
  client.executeInteraction(interaction)
})

client.on('messageCreate', (message: Message) => {
  client.executeCommand(message)
})

const run = async () => {
  const paths = __dirname + '/{events,commands}/**/*.{ts,js}'
  await importx(paths)

  // Private bot token should be defined in .env file
  const privateBotToken = process.env.BOT_TOKEN ?? ''
  client.login(privateBotToken)
}

run()
