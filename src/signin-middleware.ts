import { FlowApiClient } from "@donmahallem/flowapi";
import * as yargs from "yargs";

export const createSignInMiddleware: (client: FlowApiClient) => yargs.MiddlewareFunction = (client: FlowApiClient) => {
    return (args: yargs.Arguments & { email: string, password: string }) => {
        return client.signin(args.email, args.password)
            .then((value) => {
                return {
                    signedIn: value.statusCode === 303,
                };
            });
    };
};
