export const ShowAvailabilityhours = (availability: string) => {
  let textToShow = '';
  availability == ''
    ? (textToShow = 'Toute la journée')
    : (textToShow = availability);
  return textToShow;
};
