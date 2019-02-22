export class FlowDate {

    private _date: Date;
    public constructor(year: number, month: number, day: number) {
        //Prime everything with zeros so no errors occur
        this._date = new Date(0, 0, 0, 0, 0, 0, 0);
        this.date.setFullYear(year, month - 1, day);
    }

    public get date(): Date {
        return this._date;
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

    public static fromString(input: string): FlowDate {
        const splits: string[] = input.split('-');
        const year: number = parseInt(splits[0]);
        const month: number = parseInt(splits[1]);
        const day: number = parseInt(splits[2]);
        return new FlowDate(year, month, day);
    }

    public toString(): string {
        let output: string = '';
        output += ('' + this.year).padStart(4, '0');
        output += '-';
        output += ('' + this.month).padStart(2, '0');
        output += '-';
        output += ('' + this.day).padStart(2, '0');
        return output;
    }

    public nextDay(): FlowDate {
        const tomorrow: Date = new Date(this.date);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return new FlowDate(tomorrow.getFullYear(), tomorrow.getMonth() + 1, tomorrow.getDate());
    }

    public distance(diffDate: FlowDate): number {
        const one_day = 1000 * 60 * 60 * 24;
        const date1_ms = this.date.getTime();
        const date2_ms = diffDate.date.getTime();
        const difference_ms = date2_ms - date1_ms;
        return Math.round(difference_ms / one_day);
    }
}