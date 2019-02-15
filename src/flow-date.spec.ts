import * as testObject from "./flow-date";
import { expect } from "chai";
import "mocha";

describe("flow-date.ts", () => {
    describe("create", () => {
        it("it should parse correctly", () => {
            const testDateString: string = '1929-01-12';
            expect(testObject.FlowDate.fromString(testDateString).toString()).does.equal(testDateString)
        });
    });
    describe("next date", () => {
        it("it should parse correctly", () => {
            const testDateString: string = '1929-01-12';
            const testDateString2: string = '1929-01-13';
            expect(testObject.FlowDate.fromString(testDateString).nextDay().toString()).does.equal(testDateString2)
        });
        it("it should parse correctly", () => {
            const testDateString: string = '1929-02-28';
            const testDateString2: string = '1929-03-01';
            expect(testObject.FlowDate.fromString(testDateString).nextDay().toString()).does.equal(testDateString2)
        });
    });
});