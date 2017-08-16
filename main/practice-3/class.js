module.exports = class Class {
    constructor(number) {
        this.number = number;
        this.leader;
    }

    assignLeader(student) {
        this.leader = student;

        if (this.student !== undefined && this.student.id === student.id) {
            return "Assign team leader successfully.";
        }

        return "It is not one of us.";
    }

    appendMember(student) {
        this.student = student;
    }
}