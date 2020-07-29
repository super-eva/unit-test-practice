import {holiday} from "./holiday";
import * as module from './helper';

describe('holiday', () => {
    let mockToday;
    let mockPrint;
    beforeEach(() => {
        mockToday = jest.spyOn(module, 'getToday').mockImplementation(() => jest.fn());
        mockPrint = jest.spyOn(module, 'printMessage').mockImplementation(()=> jest.fn());
    });

    afterEach(function () {
        mockToday.mockClear();
        mockPrint.mockClear();
    });

    function givenToday(month, date) {
        mockToday.mockReturnValue({ month, date})
    }

    function shouldResponseBe(expected) {
        expect(holiday()).toBe(expected)
    }

    function shouldPrintToBeCalledTimes(expected) {
        expect(mockPrint).toBeCalledTimes(expected);
    }

    function shouldPrintToBeCalledWith(expected) {
        expect(mockPrint).toBeCalledWith(expected);
    }

    it('today is Xmas', () => {
        givenToday(12, 25);
        shouldResponseBe('Merry Xmas');
        shouldPrintToBeCalledTimes(1);
        shouldPrintToBeCalledWith('Merry Xmas');
    });

    it('today is not Xmas', () => {
        givenToday(12, 22);
        shouldResponseBe('Today is not Xmas')
        shouldPrintToBeCalledTimes(1);
        shouldPrintToBeCalledWith('Today is not Xmas');
   });
});