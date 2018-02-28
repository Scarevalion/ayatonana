class Argument {
    constructor() {
        if (this.cut === undefined) {
            throw new TypeError("Argument: must override cut method");
        }

        if (this.parse === undefined) {
            throw new TypeError("Argument: must override parse method");
        }

        if (this.validate === undefined) {
            throw new TypeError("Argument: must override validate method");
        }
    }
}

export default Argument;