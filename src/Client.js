import Discord from 'discord.js';

import Hooker from './Hooker';

class Client {
    /**
     * Client constructor
     * @param {object} environmentConfig Configuration data
     * @param {object} personnalityInteractions Aya and Nana's list of interractions
     */
    constructor(environmentConfig, personnalityInteractions) {
        this.environment = environmentConfig;
        this.personnalityInteractions = personnalityInteractions;
        this.client = new Discord.Client();
        this.hooker = new Hooker(environmentConfig);
        this.messageHooks = this.hooker.getHooks();
    }

    connect() {
        this.client.login(this.environment.client.token);
        console.log(this.personnalityInteractions.Aya.serverBoot);
    }

    run() {
        this.connect();
        
        this.client.on('ready', () => {
            console.log(this.personnalityInteractions.Aya.serverReady);
        });

        this.client.on('message', (message) => {
            if (message.author.bot) { return; }

            this.messageHooks.forEach((hook) => {
                if (!hook.checkChannel(message)) { return; }
                
                if (hook.validate(message)) { hook.run(message); }
                else if (hook.failedValidation !== undefined) { hook.failedValidation(message); }
            });
        });
    }
}

export default Client;