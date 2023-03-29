export const FormatDateIntervalIntoString = (availability: string) => {
  if (availability == '') {
    return "Toute l'année";
  }

  let textToShow = availability
    .replace('10', 'Octobre')
    .replace('11', 'Novembre')
    .replace('12', 'Décembre')
    .replace('1', 'Janvier')
    .replace('2', 'Février')
    .replace('3', 'Mars')
    .replace('4', 'Avril')
    .replace('5', 'Mai')
    .replace('6', 'Juin')
    .replace('7', 'Juillet')
    .replace('8', 'Aout')
    .replace('9', 'Septembre')
    .replace('-', ' à ')
    .replace('-', ' à ');
  return textToShow;
};
