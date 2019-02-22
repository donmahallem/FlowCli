import * as testObject from "./flow-date";
import { expect } from "chai";
import "mocha";

describe("flow-date.ts", () => {
    describe('static method', () => {
        describe("fromString()", () => {
            it("it should parse correctly", () => {
                const testDateString: string = '1929-01-12';
                const testDate: testObject.FlowDate = testObject.FlowDate.fromString(testDateString);
                expect(testDate.day).to.equal(12);
                expect(testDate.month).to.equal(1);
                expect(testDate.year).to.equal(1929);
            });
        });
    });
    describe('class methods', () => {
        const testDays: {
            from: testObject.FlowDate,
            to: testObject.FlowDate,
            date: Date
        }[] = [
                {
                    from: new testObject.FlowDate(1929, 1, 1),
                    to: new testObject.FlowDate(1929, 1, 2),
                    date: new Date(1929, 0, 1)
                },
                {
                    from: new testObject.FlowDate(2001, 2, 28),
                    to: new testObject.FlowDate(2001, 3, 1),
                    date: new Date(2001, 1, 28)
                },
                {
                    from: new testObject.FlowDate(2000, 2, 28),
                    to: new testObject.FlowDate(2000, 2, 29),
                    date: new Date(2000, 1, 28)
                },
                {
                    from: new testObject.FlowDate(2011, 12, 31),
                    to: new testObject.FlowDate(2012, 1, 1),
                    date: new Date(2011, 11, 31)
                },
                {
                    from: new testObject.FlowDate(2049, 11, 30),
                    to: new testObject.FlowDate(2049, 12, 1),
                    date: new Date(2049, 10, 30)
                }
            ];
        describe("get date", () => {
            testDays.forEach((testDate) => {
                it('should parse ' + testDate.date + ' from ' + testDate.from, () => {
                    expect(testDate.from.date.getTime()).to.equal(testDate.date.getTime());
                });
            });
        });
        describe("nextDay()", () => {
            testDays.forEach((testDate) => {
                it('it should skip correctly from ' + testDate.from.toString() + ' to ' + testDate.to.toString(), () => {
                    const calculatedDate: testObject.FlowDate = testDate.from.nextDay();
                    expect(calculatedDate.day).to.equal(testDate.to.day);
                    expect(calculatedDate.month).to.equal(testDate.to.month);
                    expect(calculatedDate.year).to.equal(testDate.to.year);
                });
            });
        });
    });
});