const Person = require('./person');

module.exports = class Student {
    constructor(name, age, klass) {
        let person = new Person(name, age);

        this.name = person.name;
        this.age = person.age;
        this.klass = klass;
    }

    introduce(){
        return "My name is "+this.name+". I am "+this.age+" years old. I am a Student. I am at Class "+this.klass+".";
    }
}