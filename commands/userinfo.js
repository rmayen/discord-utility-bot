const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Displays information about your account'),
    async execute(interaction) {
        const user = interaction.user;
        const member = interaction.member;
        const embed = new EmbedBuilder()
            .setTitle(user.username)
            .setThumbnail(user.displayAvatarURL())
            .addFields(
                { name: 'User ID', value: `${user.id}`, inline: true },
                { name: 'Joined Server', value: `${member.joinedAt.toDateString()}`, inline: true },
                { name: 'Account Created', value: `${user.createdAt.toDateString()}`, inline: true },
            )
            .setColor(0x57F287);
        await interaction.reply({ embeds: [embed] });
    },
};
