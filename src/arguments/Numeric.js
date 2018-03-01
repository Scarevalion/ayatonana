import Argument from '../Argument';

class Numeric extends Argument {
    constructor() {
        super();
    }

    cut(content) {
        var splitContent = content.split(' ');
        this.content = splitContent[0];
        return splitContent.slice(1).join(' ');
    }

    parse() {
        this.value = Number(this.content);
    }

    validate() {
        return !isNaN(this.value);
    }
}

export default Numeric;