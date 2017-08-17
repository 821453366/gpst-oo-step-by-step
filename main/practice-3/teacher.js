const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
        this.distribute(clazzes);
    }

    introduce() {

        if (this.clazzes.length === 0) {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        } else {
            return super.introduce() + ` I am a Teacher. I teach Class ${this.clazzes[0].number},${this.clazzes[1].number}.`;
        }

    }

    isTeaching(student) {
        this.student = student;
        let count =0;

        this.clazzes.forEach(item => {
            if(item.student !== undefined){
                count++;
            }
        });
        if(count > 0){
            return true;
        }else{
            return false;
        }
    }
    notifyStudentAppended(){
    }
    notifyLeaderAssigned(){
    }
    distribute(clazzes) {
        for (let clazz of clazzes) {
            clazz.teacher = this;
        }
    }
}