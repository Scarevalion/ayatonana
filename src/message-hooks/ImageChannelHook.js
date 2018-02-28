import MessageHook from '../MessageHook';

class ImageChannelHook extends MessageHook {
    constructor(environmentConfig, options) {
        super(environmentConfig, options);
    }

    validate(message) {
        if (message.attachments.size === 0) {
            return message.content.match(/(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*\.(?:jpe?g|gif|png))(?:\?([^#]*))?(?:#(.*))?/i) !== null;
        }
        if (message.attachments.size === 1) {
            return message.content === "" && message.attachments.first().filename.match(/\.(jpe?g|gif|png)$/i);
        }
        
        return false;
    }

    run(message) { }

    failedValidation(message) {
        message.delete();
    }
}

export default ImageChannelHook;