module.exports = class Person {
    constructor(name,age){
        let id;
        this.name = name;
        this.age = age;
    }
    introduce(){
        return "My name is "+this.name+". I am "+this.age +" years old.";
    }
}