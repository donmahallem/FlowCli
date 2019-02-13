import * as nconf from 'nconf';


export class CliApp {
    constructor() {
        let a: nconf.Provider = new nconf.Provider({
        });
        //
        // Setup nconf to use (in-order):
        //   1. Command-line arguments
        //   2. Environment variables
        //   3. A file located at 'path/to/config.json'
        //
        nconf.argv({
            'u': {
                alias: 'user',
                describe: 'Example description for usage generation',
                demand: true,
                parseValues: true,
                transform: function (obj) {
                    if (obj.key === 'foo') {
                        obj.value = 'baz';
                    }
                    return obj;
                }
            },
            'p': {
                alias: 'password',
                describe: 'Example description for usage generation',
                demand: true,
                parseValues: true,
                transform: function (obj) {
                    if (obj.key === 'foo') {
                        obj.value = 'baz';
                    }
                    return obj;
                }
            }
        })
            .env()
            .file({ file: 'path/to/config.json' });
        nconf.required(['user', 'password']);
    }
    public start(): void {

    }
}