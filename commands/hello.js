const { SlashCommandBuilder } = require('discord.js');

const GREETINGS = [
    (name) => `Hey there, ${name}!`,
    (name) => `What's up, ${name}?`,
    (name) => `Hello, ${name}! How's it going?`,
    (name) => `Hi ${name}! Nice to see you!`,
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Greets you with a friendly message'),
    async execute(interaction) {
        const greeting = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
        await interaction.reply(greeting(interaction.user.username));
    },
};
