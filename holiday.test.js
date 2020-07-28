import {holiday} from "./holiday";
import * as module from './getToday';

describe('holiday', () => {
    let mockToday;
    beforeEach(() => {
        mockToday = jest.spyOn(module, 'getToday').mockImplementation(() => jest.fn());
    });

    afterEach(function () {
        mockToday.mockClear()
    });

    function givenToday(month, date) {
        mockToday.mockReturnValue({ month, date})
    }

    function shouldResponseBe(expected) {
        expect(holiday()).toBe(expected)
    }

    it('today is Xmas', () => {
        givenToday(12, 25);
        shouldResponseBe('Merry Xmas');
    });

    it('today is not Xmas', () => {
        givenToday(12, 22);
        shouldResponseBe('Today is not Xmas')
    });
});