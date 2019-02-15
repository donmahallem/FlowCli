import * as yargs from 'yargs';
interface CliArgs {
    enddate?: string;
    startdate: string;
    samples: number;
    throttle: number;
    email: string;
    password: string;
}
export class CliApp {
    private args: CliArgs;
    constructor() {
        this.init();
    }

    public init(): void {
        // Init as described in: https://github.com/yargs/yargs/blob/master/docs/advanced.md#using-the-non-singleton-interface
        this.args = <any>
            console.log(this.args, process.argv[0], process.argv[1]);
    }
    public start(): void {

    }
}