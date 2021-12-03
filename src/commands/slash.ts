import { CommandInteraction } from 'discord.js'
import { Discord, Slash } from 'discordx'
import { getCurrentTime } from '@lib/helpers'

@Discord()
export abstract class SlashCommands {
  @Slash('time', { description: 'Get the current time.' })
  time(interaction: CommandInteraction) {
    const user = interaction.user
    const time = getCurrentTime()

    interaction.reply(`Hey, ${user}! The current time is ${time}`)
  }
}
