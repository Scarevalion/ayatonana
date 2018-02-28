import Argument from '../Argument';

class Word extends Argument {
    constructor() {
        super();
        
        this.content = '';
        this.value = undefined;
    }

    cut(content) {
        var splitContent = content.split(' ');
        this.content = splitContent[0];
        return splitContent.slice(1).join(' ');
    }

    parse() {
        this.value = this.content;
    }

    validate() {
        return true;
    }
}

export default Word;