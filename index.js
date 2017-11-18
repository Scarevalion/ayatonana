// NPM Dependencies
const Discord = require('discord.js');

// Local Dependencies
const Environment = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.channel.send('pong');
    }
});

client.login(Environment.clientToken);