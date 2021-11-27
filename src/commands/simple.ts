/**
 * Simple commands use a prefix and a command name to trigger the command,
 * such as "!hello".
 * The prefix is defined in the client.ts file.
 */

import type { SimpleCommandMessage } from 'discordx'
import { Discord, SimpleCommand } from 'discordx'

@Discord()
export abstract class SimpleCommands {
  @SimpleCommand('hi', { description: 'Greetings!' })
  async hi(command: SimpleCommandMessage) {
    const member = command.message.member

    command.message.reply(`👋 Hi ${member}`)
  }

  @SimpleCommand('bye', { description: 'Farewell!' })
  async bye(command: SimpleCommandMessage) {
    const member = command.message.member

    command.message.reply(`👋 Bye ${member}`)
  }
}
