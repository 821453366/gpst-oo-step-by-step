module.exports = class Class {
    constructor(number){
        this.number = number;
        this.leader;
    }

    assignLeader(student){
        this.leader = student;
    }

    appendMember(student){
        this.student = student;
    }
}