import Solution from "../Solution";
import fs from "fs";
import Student from "../Student";

describe("Testing Solution class", () => {
    const instance = new Solution("bedat.txt");

    test("Solution class instances test", () => {
        expect(instance).toBeInstanceOf(Solution);
    });

    test("The first student to enter test", () => {
        const firstStudent = instance.firstStudentToEnter;
        expect(firstStudent).toBeInstanceOf(Student);
    });

    test("The last student to leave", () =>{
        const lastStudent = instance.lastStudentToLeave;
        expect(lastStudent).toBeInstanceOf(Student);
    });

    test("The students on lunch test", () =>{
        const studentsOnLunch = instance.studentsOnLunch;
        expect(studentsOnLunch).toBe(82);
    })
});
