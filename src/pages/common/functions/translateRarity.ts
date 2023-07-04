interface RarityTable {
  [key: string]: string;
}

const rarityTable: RarityTable = {
  Common: 'Commun',
  Uncommon: 'Peu commun',
  Rare: 'Rare',
  'Ultra-rare': 'Ultra-rare',
};

export function translateRarity(inputString: string) {
  const outputRarity = rarityTable[inputString];
  if (outputRarity !== undefined) {
    return outputRarity;
  } else {
    throw new Error(`Input string ${inputString} not found in rarity table`);
  }
}
