const Person = require('./person');

module.exports = class Student extends Person {
    constructor(name, age, clazz) {
        super(name, age);
        this.clazz = clazz;
    }

    introduce() {
        let result = `${super.introduce()} I am a Student.`;

        if (this.clazz.student === undefined) {
            return result.concat(` I haven't been allowed to join Class.`)
        } else if (this.clazz.leader === undefined) {
            return result.concat(` I am at Class ${this.clazz.number}.`);
        } else {
            return result.concat(` I am Leader of Class ${this.clazz.number}.`)
        }
    }
}