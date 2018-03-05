import Discord from 'discord.js';

import Hooker from './Hooker';

class Client {
    /**
     * Client constructor
     * @param {object} environmentConfig Configuration data
     * @param {object} personnalityInteractions Aya and Nana's list of interractions
     */
    constructor(environmentConfig) {
        this.environment = environmentConfig;
        this.client = new Discord.Client();
        this.hooker = new Hooker(environmentConfig);
        this.messageHooks = this.hooker.getHooks();
    }

    /**
     * Logs the application in to Discord
     */
    connect() {
        this.client.login(this.environment.client.token);
    }

    /**
     * Launches the application and starts the message listener
     */
    run() {
        this.connect();

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
