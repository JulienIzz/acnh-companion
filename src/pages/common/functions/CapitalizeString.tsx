export const CapitalizeFirstLetters = (string: string) => {
  const arrayWithEachWord = string.split(' ');
  for (
    var wordToCapitalize = 0;
    wordToCapitalize < arrayWithEachWord.length;
    wordToCapitalize++
  ) {
    arrayWithEachWord[wordToCapitalize] =
      arrayWithEachWord[wordToCapitalize].charAt(0).toUpperCase() +
      arrayWithEachWord[wordToCapitalize].slice(1);
  }

  const stringWithEachWordFirstLetterCapitalized = arrayWithEachWord.join(' ');
  return stringWithEachWordFirstLetterCapitalized;
};
