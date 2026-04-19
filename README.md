# Jhony Bot

A modern Discord bot built with Discord.js v14 using slash commands. This bot uses the latest Discord interaction model with registered application commands rather than traditional message-based commands.

## Overview

Jhony Bot is a Discord bot built on Node.js and the Discord.js library. It uses Discord's modern slash command system, which provides a cleaner user experience with auto-complete and built-in descriptions. The bot registers commands through Discord's REST API and responds to interactions in real time.

## Purpose

Created as a personal project to learn modern Discord bot development with JavaScript, focusing on the slash command architecture introduced in Discord.js v14 and Discord's interaction-based API.

## Technologies Used

- **JavaScript (Node.js)** - Runtime environment
- **Discord.js v14** - Discord API wrapper for Node.js
- **dotenv** - Environment variable management for secure token storage
- **Discord REST API** - Used for registering slash commands

## Features

- **Slash commands** - Uses Discord's modern slash command system (`/ping`)
- **Command registration** - Automated command deployment via `deploy-commands.js`
- **Secure token handling** - Bot token and IDs stored in environment variables, not hardcoded
- **Event-driven architecture** - Listens for and responds to Discord interaction events

## How to Run

### Prerequisites
- Node.js v16.9.0 or higher
- A Discord bot token ([Discord Developer Portal](https://discord.com/developers/applications))

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/rmayen/Jhony_bot-.git
   cd Jhony_bot-
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory:
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
   npm start
   ```

## Project Structure

```
Jhony_bot-/
├── index.js              # Main bot entry point, handles events and interactions
├── deploy-commands.js    # Registers slash commands with Discord API
├── package.json          # Project dependencies and scripts
└── .env                  # Environment variables (not committed)
```

## My Role

I built this bot from scratch as a personal project. I set up the slash command registration pipeline, implemented the event listeners, and configured secure credential management using environment variables.

## Lessons Learned

- Learned the difference between legacy message-based bots and modern interaction-based bots in Discord.js v14
- Gained experience with Discord's REST API for command registration
- Practiced secure credential handling with dotenv instead of hardcoding tokens
