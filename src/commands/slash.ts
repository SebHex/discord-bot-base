import { CommandInteraction } from 'discord.js'
import { Discord, Slash } from 'discordx'

@Discord()
export abstract class SlashCommands {
  @Slash('time', { description: 'Get the current time.' })
  time(interaction: CommandInteraction) {
    const user = interaction.user
    const time = new Date().toLocaleTimeString()

    interaction.reply(`Hey, ${user}! The current time is ${time}`)
  }
}
