import ImageChannelHook from './message-hooks/ImageChannelHook';

class Hooker {
    /**
     * Hooker constructor
     * @param {object} environmentConfig Configuration data
     */
    constructor(environmentConfig) {
        this.environmentConfig = environmentConfig;
        this.hooks = {
            ImageChannelHook: ImageChannelHook
        };
    }

    /**
     * Fetches the instances of enabled message hooks
     * @returns {array} Enabled hooks
     */
    getHooks() {
        let hooks = [];

        this.environmentConfig.messageHooks.forEach((hook) => {
            if (hook.enabled) { hooks.push(new this.hooks[hook.name](this.environmentConfig, hook)); }
        });

        return hooks;
    }
}

export default Hooker;
