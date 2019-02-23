export class FlowDate {

    public get year(): number {
        return this.date.getFullYear();
    }

    public get month(): number {
        return this.date.getMonth() + 1;
    }

    public get day(): number {
        return this.date.getDate();
    }

    public static fromString(input: string): FlowDate {
        const splits: string[] = input.split("-");
        const year: number = parseInt(splits[0], 10);
        const month: number = parseInt(splits[1], 10);
        const day: number = parseInt(splits[2], 10);
        return new FlowDate(year, month, day);
    }

    private date: Date;
    public constructor(year: number, month: number, day: number) {
        this.date = new Date();
        this.date.setFullYear(year, month - 1, day);
    }

    public toString(): string {
        let output: string = "";
        output += ("" + this.year).padStart(4, "0");
        output += "-";
        output += ("" + this.month).padStart(2, "0");
        output += "-";
        output += ("" + this.day).padStart(2, "0");
        return output;
    }

    public nextDay(): FlowDate {
        const tomorrow: Date = new Date(this.date);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return new FlowDate(tomorrow.getFullYear(), tomorrow.getMonth() + 1, tomorrow.getDate());
    }

    public distance(diffDate: FlowDate): number {
        const timespanOneDay = 1000 * 60 * 60 * 24;
        const dateInMillis1 = this.date.getTime();
        const dateInMillis2 = diffDate.date.getTime();
        const diffInMillis = dateInMillis2 - dateInMillis1;
        return Math.round(diffInMillis / timespanOneDay);
    }
}
