interface SizeTable {
  [key: string]: string;
}

const sizeTable: SizeTable = {
  'Smallest (1)': 'Minuscule (1)',
  'Small (2)': 'Petit (2)',
  'Medium (3)': 'Moyen (3)',
  'Medium (4)': 'Moyen (4)',
  'Large (5)': 'Grand (5)',
  'Largest (6)': 'Énorme (6)',
};

export function translateSize(inputString: string | undefined) {
  if (inputString !== undefined) {
    const outputSize = sizeTable[inputString];
    return outputSize;
  }
}
