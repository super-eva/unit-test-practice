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

    it('today is Xmas', () => {
        mockToday.mockReturnValue({month: 12, date:25})
        expect(holiday()).toBe('Merry Xmas')
    });

    it('today is not Xmas', () => {
        mockToday.mockReturnValue({month: 12, date:11})
        expect(holiday()).toBe('Today is not Xmas')
    });
});