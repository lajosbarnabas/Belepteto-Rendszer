import Student from "../Student";
describe("Student class testing", () => {
    const instance = new Student("CEFX 07:00 1");

    test("Student class unit testing", async () => {
        expect(instance).toBeInstanceOf(Student);
    });

    test("Code property testing", async () => {
        expect(instance.code).toBe("CEFX");
    });

    test("Time property test", async () => {
        expect(instance.timeSpan).toBe(420);
    });

    test("Action property test", async () => {
        expect(instance.action).toBe(1);
    });
});
