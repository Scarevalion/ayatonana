import Numeric from './arguments/Numeric';
import Word from './arguments/Word';

class ArgumentBuilder {
    constructor() {
        this.argumentTypes = {
            'numeric': Numeric,
            'word': Word
        }
    }

    build(argumentsString, argumentsConfig) {
        var builtArguments = {};
        var remainingArguments = argumentsString;

        argumentsConfig.forEach(argument => {
            if (remainingArguments.length !== 0) {
                var arg = new this.argumentTypes[argument.type]();
                remainingArguments = arg.cut(remainingArguments);
                builtArguments[argument.label] = arg;
            }
        });

        return Object.keys(builtArguments).length === argumentsConfig.length
            ? { success: true, args: builtArguments }
            : { success: false, args: builtArguments };
    }

    validate(builtArguments) {
        var isValid = true;
        Object.keys(builtArguments).forEach(argument => {
            builtArguments[argument].parse();
            if (!builtArguments[argument].validate()) { isValid = false; }
        });

        return isValid;
    }
}

export default ArgumentBuilder;