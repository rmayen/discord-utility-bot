const { REST, Routes, SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong and shows bot latency')
    .toJSON(),
  new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Greets you with a friendly message')
    .toJSON(),
  new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Displays information about the current server')
    .toJSON(),
  new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Displays information about your account')
    .toJSON(),
  new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Rolls a dice with a specified number of sides')
    .addIntegerOption(option =>
      option.setName('sides')
        .setDescription('Number of sides on the dice (default: 6)')
        .setRequired(false))
    .toJSON(),
  new SlashCommandBuilder()
    .setName('coinflip')
    .setDescription('Flips a coin and shows heads or tails')
    .toJSON(),
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log(`Registering ${commands.length} slash commands...`);
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );
    console.log('All commands registered successfully.');
  } catch (error) {
    console.error(error);
  }
})();
