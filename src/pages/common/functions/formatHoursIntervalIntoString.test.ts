import {formatHoursIntervalIntoString} from './formatHoursIntervalIntoString';

describe('FormatHoursIntervalIntoString', () => {
  it('should return the input availability string when it is not empty', () => {
    const input = '9am - 6pm';
    const expectedResult = '09h - 18h';

    const result = formatHoursIntervalIntoString(input);

    expect(result).toEqual(expectedResult);
  });

  it('should return "Toute la journée" when the input availability string is empty', () => {
    const input = '';
    const expectedResult = 'Toute la journée';

    const result = formatHoursIntervalIntoString(input);

    expect(result).toEqual(expectedResult);
  });
});
