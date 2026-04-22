# Discord Utility Bot

A modern Discord bot built with Discord.js v14 featuring multiple slash commands, rich embeds, and an interaction-based architecture. Includes server info, user info, dice rolls, coin flips, and latency monitoring.

## Overview

This is a Discord bot built on Node.js and the Discord.js library. It uses Discord's modern slash command system, which provides a cleaner user experience with auto-complete and built-in descriptions. Commands are organized into their own modules and loaded dynamically at startup. The bot registers commands through Discord's REST API and responds to interactions in real time, with centralized error handling and rich embed messages.

## Purpose

Created as a personal project to learn modern Discord bot development with JavaScript, focusing on the slash command architecture introduced in Discord.js v14, Discord's interaction-based API, modular command loading, and rich embed message formatting.

## Technologies Used

- **JavaScript (Node.js)** - Runtime environment
- **Discord.js v14** - Discord API wrapper for Node.js
- **EmbedBuilder** - Rich embed messages for structured data display
- **dotenv** - Environment variable management for secure token storage
- **Discord REST API** - Used for registering slash commands

## Features

- **Modular command architecture** - Each slash command lives in its own file under `commands/` and is loaded dynamically at startup
- **Centralized error handling** - Failures in any command reply with a user-friendly ephemeral message instead of crashing the bot
- **Latency monitoring** - `/ping` shows bot and API latency in milliseconds
- **Server information** - `/serverinfo` displays member count, creation date, and server ID in a rich embed
- **User information** - `/userinfo` shows account details, join date, and avatar in a rich embed
- **Dice roller** - `/roll` with configurable number of sides (default: 6)
- **Coin flip** - `/coinflip` with random heads or tails result
- **Greeting system** - `/hello` with randomized friendly messages
- **Secure token handling** - Bot token and IDs stored in environment variables, not hardcoded
- **Command registration** - Automated command deployment via `deploy-commands.js`

## How to Run

### Prerequisites
- Node.js v16.9.0 or higher
- A Discord bot token ([Discord Developer Portal](https://discord.com/developers/applications))

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/rmayen/discord-utility-bot.git
   cd discord-utility-bot
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your values:
   ```
   DISCORD_TOKEN=your_bot_token_here
   CLIENT_ID=your_client_id_here
   GUILD_ID=your_guild_id_here
   ```
4. Register the slash commands:
   ```bash
   node deploy-commands.js
   ```
5. Start the bot:
   ```bash
   node index.js
   ```

## Project Structure

```
discord-utility-bot/
├── index.js              # Entry point: client setup, command loader, error handling
├── deploy-commands.js    # Registers slash commands with Discord's REST API
├── commands/             # One file per slash command
│   ├── ping.js
│   ├── hello.js
│   ├── serverinfo.js
│   ├── userinfo.js
│   ├── roll.js
│   └── coinflip.js
├── package.json          # Dependencies and scripts
├── .env.example          # Template for environment variables
├── .gitignore            # Git ignore rules (excludes .env and node_modules)
└── .env                  # Environment variables (not committed)
```

Each command module exports a `data` property (the `SlashCommandBuilder` definition) and an `execute` function. Both `index.js` and `deploy-commands.js` discover commands by reading the `commands/` folder, so adding a new command only requires dropping in a new file.

## My Role

I built this bot from scratch as a personal project. I set up the dynamic command-loading pipeline, implemented six different command handlers including rich embed responses, added centralized error handling, and configured secure credential management using environment variables.

## Lessons Learned

- Learned the difference between legacy message-based bots and modern interaction-based bots in Discord.js v14
- Gained experience with Discord's REST API for command registration
- Practiced building a modular, extensible command-loading system so new commands can be added as isolated files
- Practiced building rich embed messages with EmbedBuilder for structured data display
- Practiced secure credential handling with dotenv instead of hardcoding tokens
