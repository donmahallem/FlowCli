import * as yargs from 'yargs';
import { CliApp } from './cli-app';
import { HeartRateDownloader } from './heartrate-downloader';
yargs((process.argv.slice(2)))
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
        }).option('throttle', {
            default: 1000,
            type: 'number',
            description: 'The throttle in ms between every request to the flow.polar.com backend'
        });

    }, (argv) => {
        const dateRegex: RegExp = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
        if (!dateRegex.test(argv.startdate)) {
            throw new Error("The provided startDate does not seem valid");
        }
        const app: HeartRateDownloader = new HeartRateDownloader();
        if (argv.enddate) {
            if (!dateRegex.test(argv.enddate)) {
                throw new Error("The provided endDate does not seem valid");
            }
            if (argv.startdate.localeCompare(argv.enddate) >= 0) {
                throw new Error("Enddate must be after startdate");
            }
            app.downloadRange(argv.startdate, argv.enddate, argv.samples, argv.samples);
        } else {
            app.download(argv.startdate, argv.samples);
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
    .help().argv;