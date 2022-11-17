import type { CommandInteraction, Message } from "discord.js";
import type { SimpleCommandMessage } from "discordx";
import {
  Discord,
  SimpleCommand,
  SimpleCommandOption,
  SimpleCommandOptionType,
  Slash,
} from "discordx";

@Discord()
export class Example {
  @SimpleCommand({ aliases: ["hi"] })
  hello(command: SimpleCommandMessage): void {
    console.log("Does it reach here??");
    command.message.reply(`👋 ${command.message.member}`);
  }

  // make single handler for simple and slash command
  likeIt(command: CommandInteraction | Message): void {
    command.reply("I like it, Thanks");
  }

  @SimpleCommand({ name: "like-it" })
  simpleLikeIt(command: SimpleCommandMessage): void {
    this.likeIt(command.message);
  }

  @Slash({ description: "like-ite", name: "like-it" })
  slashLikeIt(command: CommandInteraction): void {
    this.likeIt(command);
  }
}
