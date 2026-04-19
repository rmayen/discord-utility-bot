const { Client, GatewayIntentBits, Events, EmbedBuilder } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, () => {
  console.log(`Ready! Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
    const latency = sent.createdTimestamp - interaction.createdTimestamp;
    await interaction.editReply(`Pong! Latency: ${latency}ms | API Latency: ${Math.round(client.ws.ping)}ms`);
  }

  else if (commandName === 'hello') {
    const greetings = [
      `Hey there, ${interaction.user.username}!`,
      `What's up, ${interaction.user.username}?`,
      `Hello, ${interaction.user.username}! How's it going?`,
      `Hi ${interaction.user.username}! Nice to see you!`,
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    await interaction.reply(randomGreeting);
  }

  else if (commandName === 'serverinfo') {
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
  }

  else if (commandName === 'userinfo') {
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
  }

  else if (commandName === 'roll') {
    const sides = interaction.options.getInteger('sides') || 6;
    const result = Math.floor(Math.random() * sides) + 1;
    await interaction.reply(`You rolled a **${result}** (d${sides})`);
  }

  else if (commandName === 'coinflip') {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    await interaction.reply(`The coin landed on **${result}**!`);
  }
});

client.login(process.env.DISCORD_TOKEN);
