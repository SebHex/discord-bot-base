import type { ArgsOf } from 'discordx'
import { Discord, On } from 'discordx'

type MessageCreateProps = ArgsOf<'messageCreate'>
type MessageReactionAddProps = ArgsOf<'messageReactionAdd'>

@Discord()
export abstract class AppDiscord {
  @On('messageCreate')
  onMessageCreate([message]: MessageCreateProps) {
    const username = message.author.username
    const content = message.content

    // eslint-disable-next-line no-console
    console.log(`${username} said: ${content}`)
  }

  @On('messageReactionAdd')
  onMessageReactionAdd([reaction, user]: MessageReactionAddProps) {
    const username = user.username
    const emojiName = reaction.emoji.name

    // eslint-disable-next-line no-console
    console.log(
      `${username} reacted to a message with the :${emojiName}: emoji`
    )
  }
}
