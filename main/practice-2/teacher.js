const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
    }

    introduce() {
        if (this.clazzes.length === 0) {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        } else {
            return super.introduce() + " I am a Teacher. I teach Class " + this.clazzes[0].number + "," + this.clazzes[1].number + ".";
        }
    }
}
