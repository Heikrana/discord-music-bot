import { Client, Intents } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
	intents: [
		Intents.FLAGS.GUILD_VOICE_STATES,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILDS,
	],
});

const prefix = "-";

client.once("ready", () => {
	console.log("Bot Online");
});

client.on("messageCreate", (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const messageArray = message.content.slice(prefix.length).split(" ");
	const command = messageArray[0].toLowerCase();

	if (messageArray[0] === "") {
		message.channel.send("Show help i.e. all the commands");
	} else if (command === "play") {
		message.channel.send("Play Songs");
	}
});

client.login(process.env.TOKEN);
