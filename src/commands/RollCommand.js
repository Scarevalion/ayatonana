import Command from '../Command';

class RollCommand extends Command {
    constructor(environmentConfig) {
        super(environmentConfig);
        
        this.overloads = [
            { label: 'rollDefault', arguments: [] },
            { label: 'rollOneToMax', arguments: [ { type: 'numeric', label: 'max' } ] },
            { label: 'rollMinToMax', arguments: [ { type: 'numeric', label: 'min' }, { type: 'numeric', label: 'max' } ] }
        ]
    }

    rollDefault(args) {
        return Math.floor(Math.random() * 100) + 1;
    }

    rollOneToMax(args) {
        return Math.floor(Math.random() * args.max.value) + 1;
    }

    rollMinToMax(args) {
        return Math.floor(Math.random() * (args.max.value - args.min.value + 1)) + args.min.value;
    }
}

export default RollCommand;