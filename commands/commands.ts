import wisdom from "./wisdom/wisdom";
import raidToday from "./raidToday/raidToday";
import whenEndwalker from "./whenEndwalker/whenEndwalker";
import potatReact from "./potatReact/potatReact";
import { Message } from "discord.js";

export const commands: ((message: Message) => boolean | void)[] = [
  potatReact,
  wisdom,
  raidToday,
  whenEndwalker,
];
