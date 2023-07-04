interface PersonalityTable {
  [key: string]: string;
}

const personalityTable: PersonalityTable = {
  Uchi: 'Familier',
  Snooty: 'Hautain',
  Cranky: 'Grognon',
  Normal: 'Normal',
  Smug: 'Suffisant',
  Peppy: 'Pétillant',
  Jock: 'Sportif',
  Lazy: 'Paresseux',
};

export function translatePersonality(inputString: string) {
  const outputPersonality = personalityTable[inputString];
  if (outputPersonality !== undefined) {
    return outputPersonality;
  } else {
    throw new Error(
      `Input string ${inputString} not found in personality table`,
    );
  }
}
