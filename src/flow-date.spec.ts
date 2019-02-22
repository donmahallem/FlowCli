import * as testObject from "./flow-date";
import { expect } from "chai";
import "mocha";
const testDays: {
    from: testObject.FlowDate,
    to: testObject.FlowDate,
    date: Date,
    str: string,
    day: number,
    month: number,
    year: number
}[] = [
        {
            from: new testObject.FlowDate(1929, 1, 1),
            to: new testObject.FlowDate(1929, 1, 2),
            date: new Date(1929, 0, 1),
            str: '1929-01-01',
            day: 1,
            month: 1,
            year: 1929
        },
        {
            from: new testObject.FlowDate(2001, 2, 28),
            to: new testObject.FlowDate(2001, 3, 1),
            date: new Date(2001, 1, 28),
            str: '2001-02-28',
            day: 28,
            month: 2,
            year: 2001
        },
        {
            from: new testObject.FlowDate(2000, 2, 28),
            to: new testObject.FlowDate(2000, 2, 29),
            date: new Date(2000, 1, 28),
            str: '2000-02-28',
            day: 28,
            month: 2,
            year: 2000
        },
        {
            from: new testObject.FlowDate(2011, 12, 31),
            to: new testObject.FlowDate(2012, 1, 1),
            date: new Date(2011, 11, 31),
            str: '2011-12-31',
            day: 31,
            month: 12,
            year: 2011
        },
        {
            from: new testObject.FlowDate(2049, 11, 30),
            to: new testObject.FlowDate(2049, 12, 1),
            date: new Date(2049, 10, 30),
            str: '2049-11-30',
            day: 30,
            month: 11,
            year: 2049
        }
    ];
describe("flow-date.ts", () => {
    describe('static method', () => {
        describe("fromString()", () => {
            testDays.forEach((testDate) => {
                it("it should parse correctly", () => {
                    const tDate: testObject.FlowDate = testObject.FlowDate.fromString(testDate.str);
                    expect(tDate.day).to.equal(testDate.day);
                    expect(tDate.month).to.equal(testDate.month);
                    expect(tDate.year).to.equal(testDate.year);
                });
            });
        });
    });
    describe('class methods', () => {
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
        describe('toString()', () => {
            testDays.forEach((testDate) => {
                it('should format ' + testDate.date + ' to ' + testDate.str, () => {
                    expect(testDate.from.toString()).to.equal(testDate.str);
                });
            });
        })
    });
});