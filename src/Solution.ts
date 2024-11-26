import fs from "fs";
import Student from "./Student";

export default class Solution {
    #students: Student[] = [];

    get studentsOnLunch(): number {
        let count: number = 0;
        for (const student of this.#students) {
            if (student.action == 3) {
                count++;
            }
        }
        return count;
    }

    studentToEnterBetweenTime(fileName: string): void {
        try {
            fs.writeFileSync(fileName, this.#studentToEnterBetweenTime());
        } catch (error) {
            console.log(`Error: ${(error as Error).message}`);
        }
    }

    #studentToEnterBetweenTime(): string {
        const out: string[] = [];
        for (const student of this.#students) {
            if (student.timeSpan > 470 && student.timeSpan < 495) {
                out.push(`${student.time} `);
                out.push(`${student.code}\n`);
            }
        }
        return out.join("");
    }

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
