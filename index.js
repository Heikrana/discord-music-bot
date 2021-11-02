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

const prefix = ",";

client.once("ready", () => {
	console.log("Bot Online");
});

client.on("message", (message) => {
	console.log(message.content);
	message.channel.send("Woot!");
});

client.login(process.env.TOKEN);
