import MessageHook from '../MessageHook';

class ImageChannelHook extends MessageHook {
    constructor(environmentConfig, options) {
        super(environmentConfig, options);
    }

    validate(message) {
            if (message.attachments.size > 0 || message.embeds.size > 0 )
              return false
            return true;
        }
    run(message) { }

    failedValidation(message) {
        message.delete();
    }
}

export default ImageChannelHook;
