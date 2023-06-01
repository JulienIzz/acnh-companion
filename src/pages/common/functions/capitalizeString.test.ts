import {capitalizeFirstLetters} from './capitalizeString';

describe('CapitalizeFirstLetters', () => {
  it('should capitalize the first letter of each word in the string', () => {
    const input = 'hello world';
    const expectedResult = 'Hello World';

    const result = capitalizeFirstLetters(input);

    expect(result).toEqual(expectedResult);
  });

  it('should handle empty strings', () => {
    const input = '';
    const expectedResult = '';

    const result = capitalizeFirstLetters(input);

    expect(result).toEqual(expectedResult);
  });

  it('should handle strings with a single word', () => {
    const input = 'reactnative';
    const expectedResult = 'Reactnative';

    const result = capitalizeFirstLetters(input);

    expect(result).toEqual(expectedResult);
  });

  it('should handle strings with leading and trailing spaces', () => {
    const input = '  hello world  ';
    const expectedResult = '  Hello World  ';

    const result = capitalizeFirstLetters(input);

    expect(result).toEqual(expectedResult);
  });

  it('should handle already capitalized strings', () => {
    const input = 'Hello World';
    const expectedResult = 'Hello World';

    const result = capitalizeFirstLetters(input);

    expect(result).toEqual(expectedResult);
  });
});
