"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_1 = require("./date");
describe('date', () => {
    beforeEach(() => {
        const now = jest.spyOn(Date, 'now');
        now.mockReturnValue(new Date(2018, 5, 2, 16, 13).getTime());
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('today', () => {
        expect(date_1.today()).toEqual(new Date(2018, 5, 2));
    });
});
it('toYearMonthDay', () => {
    expect(date_1.toYearMonthDay(new Date(2018, 7, 5))).toBe('2018-08-05');
});
it('toFullTime', () => {
    expect(date_1.toFullTime(new Date(2018, 8, 5, 9, 8, 5))).toBe('2018-09-05 09:08:05');
});
