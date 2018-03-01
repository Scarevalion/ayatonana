import Argument from '../Argument';

class Group extends Argument {
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
        return /^<@&[0-9]+>$/.test(this.value);
    }
}

export default Group;