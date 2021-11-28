import type { Interaction, Message } from 'discord.js'
import 'reflect-metadata'
import dotenv from 'dotenv'
import { Intents } from 'discord.js'
import { Client } from 'discordx'
import { dirname, importx } from '@discordx/importer'

// Load .env file
dotenv.config()

const client = new Client({
  simpleCommand: {
    prefix: '!'
  },
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_VOICE_STATES
  ],
  // If you only want to use guild commands, uncomment this line
  // botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],
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

  // eslint-disable-next-line no-console
  console.log('🤖 Bot started!')
})

client.on('interactionCreate', (interaction: Interaction) => {
  client.executeInteraction(interaction)
})

client.on('messageCreate', (message: Message) => {
  client.executeCommand(message)
})

const run = async () => {
  const paths = dirname(import.meta.url) + '/{events,commands}/**/*.{ts,js}'
  await importx(paths)

  // Private bot token should be defined in .env file
  const privateBotToken = process.env.BOT_TOKEN ?? ''
  client.login(privateBotToken)
}

run()
