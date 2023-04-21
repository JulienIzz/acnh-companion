import {FormatDateIntervalIntoString} from './FormatDateIntervalIntoString';

describe('FormatDateIntervalIntoString', () => {
  it('should return the formatted date interval when the input is not empty', () => {
    const input = '9 - 6';
    const expectedResult = 'Septembre à Juin';

    const result = FormatDateIntervalIntoString(input);

    expect(result).toEqual(expectedResult);
  });

  it('should return "Toute l\'année" when the input availability string is empty', () => {
    const input = '';
    const expectedResult = "Toute l'année";

    const result = FormatDateIntervalIntoString(input);

    expect(result).toEqual(expectedResult);
  });

  it('should handle date intervals spanning from a single-digit month to a double-digit month', () => {
    const input = '8 - 11';
    const expectedResult = 'Aout à Novembre';

    const result = FormatDateIntervalIntoString(input);

    expect(result).toEqual(expectedResult);
  });

  it('should handle date intervals spanning from a double-digit month to a single-digit month', () => {
    const input = '10 - 3';
    const expectedResult = 'Octobre à Mars';

    const result = FormatDateIntervalIntoString(input);

    expect(result).toEqual(expectedResult);
  });
});
