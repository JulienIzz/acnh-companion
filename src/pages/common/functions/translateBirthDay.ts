interface MonthTable {
  [key: string]: string;
}

const monthTable: MonthTable = {
  January: 'janvier',
  February: 'février',
  March: 'mars',
  April: 'avril',
  May: 'mai',
  June: 'juin',
  July: 'juillet',
  August: 'août',
  September: 'septembre',
  October: 'octobre',
  November: 'novembre',
  December: 'décembre',
};

export function translateBirthDay(inputString: string) {
  const parts = inputString.split(' ');
  let day = parts[1].replace(/[^0-9]/g, '');
  const month = monthTable[parts[0]];

  if (month !== undefined) {
    const outputString = `${day} ${month}`;
    return outputString;
  } else {
    throw new Error(`Input string ${inputString} not found in month table`);
  }
}
