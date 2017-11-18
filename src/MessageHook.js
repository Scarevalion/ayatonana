class MessageHook {
    constructor(environmentConfig, options) {
        this.environmentConfig = environmentConfig;
        this.name = options.name;
        this.channels = options.channels;
        
        if (this.validate === undefined) {
            throw new TypeError("MessageHook: must override validate method");
        }

        if (this.run === undefined) {
            throw new TypeError("MessageHook: must override run method");
        }
    }

    checkChannel(message) {
        if (this.channels.length > 0) {
            return this.channels.includes(message.channel.name);
        }

        return true;
    }
}

export default MessageHook;