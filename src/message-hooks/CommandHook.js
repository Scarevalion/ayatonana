import MessageHook from '../MessageHook';

class CommandHook extends MessageHook {
    constructor(environmentConfig, options) {
        super(environmentConfig, options);
    }

    validate(message) {
        if (!this.checkChannel(message)) { return false; }

        var regex = new RegExp("^" + this.environmentConfig.defaultCommandToken);
        return message.content.match(regex) !== null;
    }

    run(message) {
        message.channel.send('Commands are WIP');
    }
}

export default CommandHook;