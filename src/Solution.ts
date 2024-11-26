import fs from "fs";
import Student from "./Student";

export default class Solution {
    #students: Student[] = [];

    get lastStudentToLeave(): Student {
        let oneStudent: Student = this.#students[0];
        for (const currentStudent of this.#students) {
            if (currentStudent.timeSpan > oneStudent.timeSpan) {
                oneStudent = currentStudent;
            }
        }
        return oneStudent;
    }

    get firstStudentToEnter(): Student {
        let oneStudent: Student = this.#students[0];
        for (const currentStudent of this.#students) {
            if (oneStudent.timeSpan > currentStudent.timeSpan) {
                oneStudent = currentStudent;
            }
        }
        return oneStudent;
    }

    constructor(source: string) {
        fs.readFileSync(source)
            .toString()
            .split("\n")
            .forEach(line => {
                const currentLine: string = line.trim();
                if (currentLine.length > 0) {
                    this.#students.push(new Student(currentLine));
                }
            });
    }
}
