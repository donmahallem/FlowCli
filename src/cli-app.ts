import * as yargs from 'yargs';

export class CliApp {
    private args: yargs.Argv;
    constructor() {
        // Init as described in: https://github.com/yargs/yargs/blob/master/docs/advanced.md#using-the-non-singleton-interface
        this.args = yargs((process.argv.slice(2)))
            .command('download heartrate <startdate> [enddate]', 'the serve command', (args: yargs.Argv) => {
                return yargs.option('samples', {
                    default: 50000,
                    type: 'number',
                    description: 'The number of samples for heartrate to download'
                }).option('enddate', {
                    demand: false,
                    type: 'string',
                    description: 'A date formated like 2019-10-12'
                }).option('startdate', {
                    demand: true,
                    type: 'string',
                    description: 'A date formated like 2019-10-12'
                });

            }, (argv) => {
                const dateRegex: RegExp = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
                if (!dateRegex.test(argv.startdate)) {
                    throw new Error("The provided startDate does not seem valid");
                }
                if (argv.enddate) {
                    if (!dateRegex.test(argv.enddate)) {
                        throw new Error("The provided endDate does not seem valid");
                    }
                    if (argv.startdate.localeCompare(argv.enddate) >= 0) {
                        throw new Error("Enddate must be after startdate");
                    }
                }

            })
            .option('password', {
                'string': true,
                demand: true,
                description: 'The password you use to login to flow.polar.com'
            })
            .option('email', {
                'string': true,
                demand: true,
                description: 'The email you use to login to flow.polar.com'
            })
            .demandOption(['email', 'password'], 'Please provide both run and path arguments to work with this tool')
            .help();
        console.log(this.args.argv);
    }
    public start(): void {

    }
}