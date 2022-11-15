import type { ArgsOf, Client } from "discordx";
import { Discord, On } from "discordx";

@Discord()
export class Example {
  @On()
  messageCreate([message]: ArgsOf<"messageCreate">, client: Client): void {
    console.log(message.content, "", message.author.username);
    const mesAuthor = message.author.username.toLowerCase();
    if (mesAuthor == "fal") {
      message.react("lili:1042089397262241812");
    }
  }

  @On()
  messageReactionAdd([reaction, user]: ArgsOf<"messageReactionAdd">): void {
    const member = reaction.message.guild?.members.resolve(user.id);
    if (member) {
      console.log("will it reach here???");
      console.log(member.roles.cache.map((r) => r.name));
    }
  }
}
