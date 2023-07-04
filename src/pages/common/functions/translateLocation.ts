interface TranslationTable {
  [key: string]: string;
}

const translationTable: TranslationTable = {
  River: 'Rivière',
  Pond: 'Étang',
  'River (Clifftop)': 'Rivière (sommet de falaise)',
  'River (Clifftop) & Pond': 'Rivière (sommet de falaise) & Étang',
  'River (Mouth)': 'Estuaire',
  'Sea (when raining or snowing)': 'Mer (pluie ou neige)',
  Sea: 'Mer',
  Pier: 'Ponton',
  'On the ground': 'Sur le sol',
  'Shaking trees': 'En secouant les arbres',
  'Hitting rocks': 'En frappant les rochers',
  'On rocks and bush (when raining)': 'Rochers et buissons (pluie)',
  'On villagers': 'Sur les villageois',
  Flying: 'Vole',
  'Near trash': 'Près des déchets',
  'On beach rocks': 'Rochers de plage',
  'On the beach': 'Sur la plage',
  'On rotten food': 'Sur la nourriture pourrie',
  'Under trees': 'Sous les arbres',
  'On trees': 'Sur les arbres',
  'On palm trees': 'Sur les palmiers',
  'On tree stumps': "Sur les souches d'arbres",
  'On flowers': 'Sur les fleurs',
  'On ponds and rivers': "Sur l'étang et les rivières",
  Underground: 'Sous terre',
  'Flying (near water)': "Vole (près de l'eau)",
  'On white flowers': 'Sur les fleurs blanches',
  'Flying by light': 'Vole près de la lumière',
  'Flying near hybrid flowers': 'Vole près des fleurs hybrides',
};

export function translateLocation(inputString: string) {
  const outputString = translationTable[inputString];
  if (outputString !== undefined) {
    return outputString;
  } else {
    throw new Error(
      `Input string ${inputString} not found in transcription table`,
    );
  }
}
