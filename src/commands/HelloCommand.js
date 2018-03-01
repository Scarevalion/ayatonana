import Command from '../Command';

class HelloCommand extends Command {
    constructor(environmentConfig) {
        super(environmentConfig);
        
        this.overloads = [
            { label: 'hello', arguments: [] },
            { label: 'customHello', arguments: [ { type: 'word', label: 'person' } ] }
        ]
    }

    hello(args) {
        return "こんにちは～";
    }

    customHello(args) {
        if (args.person.value === 'dante') {
            return "ロリコンさんこんにちは～";
        }
        if (args.person.value === '5unken') {
            return "5unkEn is a panda";
        }
        
        return hello(args);
    }
}

export default HelloCommand;