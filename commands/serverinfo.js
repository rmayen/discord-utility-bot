const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Displays information about the current server'),
    async execute(interaction) {
        const guild = interaction.guild;
        const embed = new EmbedBuilder()
            .setTitle(guild.name)
            .setThumbnail(guild.iconURL())
            .addFields(
                { name: 'Members', value: `${guild.memberCount}`, inline: true },
                { name: 'Created', value: `${guild.createdAt.toDateString()}`, inline: true },
                { name: 'Server ID', value: `${guild.id}`, inline: true },
            )
            .setColor(0x5865F2);
        await interaction.reply({ embeds: [embed] });
    },
};
