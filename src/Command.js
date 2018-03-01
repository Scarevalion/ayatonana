import ArgumentBuilder from './ArgumentBuilder';

class Command {
    constructor(environmentConfig, options) {
        this.environmentConfig = environmentConfig;
        this.argumentBuilder = new ArgumentBuilder();
    }

    run(message) {
        if (this.overloads === undefined) {
            throw new TypeError("Command: must define overloads");
        }

        var argumentsString = message.content.substr(this.environmentConfig.defaultCommandToken.length).split(' ').slice(1).join(' ');
        var buildResults = this.buildArguments(argumentsString);
        var overloadLabel = buildResults.selectedOverload;

        if (overloadLabel === undefined) { return message.channel.send("Invalid arguments -- need to make a more specific message kek"); }

        return this.argumentBuilder.validate(buildResults.arguments)
            ? message.channel.send(this[overloadLabel](buildResults.arguments))
            : message.channel.send("Invalid arguments -- need to make a more specific message kek");
    }

    buildArguments(argumentsString) {
        var selectedOverload = undefined;
        var builtArguments = [];

        this.overloads.forEach(overload => {
            var buildResults = this.argumentBuilder.build(argumentsString, overload.arguments);

            if (buildResults.success) {
                selectedOverload = overload.label;
                builtArguments = buildResults.args;
            }
        });

        return { selectedOverload : selectedOverload, arguments: builtArguments };
    }
}

export default Command;