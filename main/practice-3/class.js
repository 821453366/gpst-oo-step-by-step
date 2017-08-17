module.exports = class Class {
    constructor(number) {
        this.number = number;
        this.leader;
    }

    assignLeader(student) {
        if (this.teacher) {
            this.teacher.notifyLeaderAssigned(`${student.name} become Leader of Class ${student.clazz.number}`);
        }
        this.leader = student;

        if (this.student !== undefined && this.student.id === student.id) {
            return "Assign team leader successfully.";
        }

        return "It is not one of us.";
    }

    appendMember(student) {
        this.student = student;
        if (this.teacher) {
            this.teacher.notifyStudentAppended(`${student.name} has joined Class ${student.clazz.number}`);
        }
    }
}