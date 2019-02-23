export class FlowDate {

    public static fromString(input: string): FlowDate {
        const splits: string[] = input.split("-");
        const year: number = parseInt(splits[0], 10);
        const month: number = parseInt(splits[1], 10);
        const day: number = parseInt(splits[2], 10);
        return new FlowDate(year, month, day);
    }

    public static toDateArray(startDate: FlowDate, endDate: FlowDate): FlowDate[] {
        if (startDate.distance(endDate) === 0) {
            return [startDate];
        }
        const dates: FlowDate[] = [];
        let nextDate: FlowDate = startDate;
        const walkUpwards: boolean = startDate.distance(endDate) > 0;
        do {
            dates.push(nextDate);
            nextDate = walkUpwards ? nextDate.nextDay() : nextDate.previousDay();
        } while (nextDate.distance(endDate) !== 0);
        dates.push(endDate);
        return dates;
    }

    private mDate: Date;

    public constructor(year: number, month: number, day: number) {
        // Prime everything with zeros so no errors occur
        this.mDate = new Date(0, 0, 0, 0, 0, 0, 0);
        this.date.setFullYear(year, month - 1, day);
    }

    public get date(): Date {
        return this.mDate;
    }
    public get year(): number {
        return this.date.getFullYear();
    }

    public get month(): number {
        return this.date.getMonth() + 1;
    }

    public get day(): number {
        return this.date.getDate();
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

    public previousDay(): FlowDate {
        const yesterday: Date = new Date(this.date);
        yesterday.setDate(yesterday.getDate() - 1);
        return new FlowDate(yesterday.getFullYear(), yesterday.getMonth() + 1, yesterday.getDate());
    }

    public distance(diffDate: FlowDate): number {
        const timespanOneDay = 1000 * 60 * 60 * 24;
        const dateInMillis1 = this.date.getTime();
        const dateInMillis2 = diffDate.date.getTime();
        const diffInMillis = dateInMillis2 - dateInMillis1;
        return Math.round(diffInMillis / timespanOneDay);
    }
}
