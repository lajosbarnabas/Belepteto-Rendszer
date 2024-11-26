export default class Student {
    #code: string;
    #time: string;
    #action: number;

    get code(): string {
        return this.#code;
    }

    get time(): string {
        return this.#time;
    }

    get timeSpan(): number {
        const timeArray: string[] = this.#time.split(":");
        return parseInt(timeArray[0]) * 60 + parseInt(timeArray[1]);
    }

    get action(): number {
        return this.#action;
    }

    constructor(row: string) {
        const data: string[] = row.split(" ");
        this.#code = data[0];
        this.#time = data[1];
        this.#action = parseInt(data[2]);
    }
}
