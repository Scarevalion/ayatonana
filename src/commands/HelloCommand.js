import Command from '../Command';

class HelloCommand extends Command {
    constructor(environmentConfig) {
        super(environmentConfig);
        
        this.overloads = [
            { label: 'hello', arguments: [ { type: 'word', label: 'person' } ] }
        ]
    }

    hello(args) {
        if (args.person.value === 'dante') {
            return "Dante is a futa loli lover";
        }
        if (args.person.value === '5unken') {
            return "5unkEn is a panda";
        }
        
        return "こんにちは～";
    }
}

export default HelloCommand;