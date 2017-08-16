const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name,age,clazzes){
        super(name,age);
        this.clazzes = clazzes;
    }

}