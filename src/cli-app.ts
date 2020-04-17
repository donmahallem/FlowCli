import * as yargs from "yargs";
interface ICliArgs {
    enddate?: string;
    startdate: string;
    samples: number;
    throttle: number;
    email: string;
    password: string;
}

export class CliApp {
    private args: ICliArgs;
    constructor() {
        this.init();
    }

    public init(): void {
        // Init as described in:
        // https://github.com/yargs/yargs/blob/master/docs/advanced.md#using-the-non-singleton-interface
        // this.args = console.log(this.args, process.argv[0], process.argv[1]) as any;
    }
    public start(): void {

    }
}
