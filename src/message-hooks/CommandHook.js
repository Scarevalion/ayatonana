import MessageHook from '../MessageHook';

import HelloCommand from '../commands/HelloCommand';
import RollCommand from '../commands/RollCommand';

class CommandHook extends MessageHook {
    constructor(environmentConfig, options) {
        super(environmentConfig, options);

        this.commands = {
            'hello': new HelloCommand(environmentConfig),
            'roll': new RollCommand(environmentConfig)
        }
    }

    validate(message) {
        if (!this.checkChannel(message)) { return false; }

        var regex = new RegExp("^" + this.environmentConfig.defaultCommandToken);
        return message.content.match(regex) !== null;
    }

    run(message) {
        var trigger = this.getCommandTrigger(message);
        if (this.commands[trigger] !== undefined) { this.commands[trigger].run(message); }
    }

    getCommandTrigger(message) {
        return message.content.substr(this.environmentConfig.defaultCommandToken.length).split(' ')[0];
    }
}

export default CommandHook;