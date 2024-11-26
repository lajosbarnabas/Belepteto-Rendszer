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

    get booksRentedLibrary(): Student[] {
        const rentedList: Map<string, Student> = new Map();
        for (const currentStudent of this.#students) {
            if (currentStudent.action == 4 && !rentedList.has(currentStudent.code)) {
                rentedList.set(currentStudent.code, currentStudent);
            }
        }
        return Array.from(rentedList.values());
    }

    get isLibraryMorePopular(): string {
        const libraryCount = this.booksRentedLibrary.length;
        const lunchCount = this.studentsOnLunch;
        return libraryCount > lunchCount ? "Többen voltak, mint a menzán." : "Nem voltak többen, mint a menzán.";
    }

    get bakeryStudents(): string[] {
        const returned: Set<string> = new Set();
        const arrived: Set<string> = new Set();
        for (const student of this.#students) {
            if ((student.action == 1 && student.timeSpan < 645) || (student.action == 2 && student.timeSpan >= 645 && student.timeSpan <= 660)) {
                arrived.add(student.code);
            }
        }
        for (const student of this.#students) {
            if (!arrived.has(student.code) && student.action == 1 && student.timeSpan >= 650 && student.timeSpan <= 660) {
                returned.add(student.code);
            }
        }

        return Array.from(returned);
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
