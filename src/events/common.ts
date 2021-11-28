import type { ArgsOf } from 'discordx'
import { Discord, On } from 'discordx'

type MessageCreateArgs = ArgsOf<'messageCreate'>
type MessageReactionAddArgs = ArgsOf<'messageReactionAdd'>

@Discord()
export abstract class AppDiscord {
  @On('messageCreate')
  onMessageCreate([message]: MessageCreateArgs) {
    const username = message.author.username
    const content = message.content

    // eslint-disable-next-line no-console
    console.log(`${username} said: ${content}`)
  }

  @On('messageReactionAdd')
  onMessageReactionAdd([reaction, user]: MessageReactionAddArgs) {
    const username = user.username
    const emojiName = reaction.emoji.name

    // eslint-disable-next-line no-console
    console.log(
      `${username} reacted to a message with the :${emojiName}: emoji`
    )
  }
}
