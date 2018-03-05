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
      message.reply("Vous n'êtes pas censé poster de liens ou d'images ici, merci d'aller dans les galeries pour ça.")
        message.delete();
    }
}

export default ImageChannelHook;
