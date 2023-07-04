interface AnimalTable {
  [key: string]: string;
}

const animalTable: AnimalTable = {
  Alligator: 'Alligator',
  Anteater: 'Fourmilier',
  Bear: 'Ours',
  Bird: 'Oiseau',
  Bull: 'Taureau',
  Cat: 'Chat',
  Chicken: 'Poulet',
  Cow: 'Vache',
  Cub: 'Ourson',
  Deer: 'Cerf',
  Dog: 'Chien',
  Duck: 'Canard',
  Eagle: 'Aigle',
  Elephant: 'Éléphant',
  Frog: 'Grenouille',
  Goat: 'Chèvre',
  Gorilla: 'Gorille',
  Hamster: 'Hamster',
  Hippo: 'Hippopotame',
  Horse: 'Cheval',
  Kangaroo: 'Kangourou',
  Koala: 'Koala',
  Lion: 'Lion',
  Monkey: 'Singe',
  Mouse: 'Souris',
  Octopus: 'Pieuvre',
  Ostrich: 'Autruche',
  Penguin: 'Pingouin',
  Pig: 'Cochon',
  Rabbit: 'Lapin',
  Rhino: 'Rhinocéros',
  Sheep: 'Mouton',
  Squirrel: 'Écureuil',
  Tiger: 'Tigre',
  Wolf: 'Loup',
};

export function translateSpecies(inputString: string) {
  const outputAnimal = animalTable[inputString];
  if (outputAnimal !== undefined) {
    return outputAnimal;
  } else {
    throw new Error(`Input string ${inputString} not found in animal table`);
  }
}
