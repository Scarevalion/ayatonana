import Argument from '../Argument';

class Line extends Argument {
    constructor() {
        super();
    }

    cut(content) {
        this.content = content;
        return '';
    }

    parse() {
        this.value = this.content;
    }

    validate() {
        return this.value.length !== 0;
    }
}

export default Line;