export const FormatHoursIntervalIntoString = (availability: string) => {
  let textToShow = '';
  availability == ''
    ? (textToShow = 'Toute la journée')
    : (textToShow = availability);
  return textToShow;
};
