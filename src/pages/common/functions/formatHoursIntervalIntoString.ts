export const formatHoursIntervalIntoString = (availability: string) => {
  if (availability == '') {
    return 'Toute la journée';
  }
  let textToShow = availability
    .replace('1am', '01h')
    .replace('2am', '02h')
    .replace('3am', '03h')
    .replace('4am', '04h')
    .replace('5am', '05h')
    .replace('6am', '06h')
    .replace('7am', '07h')
    .replace('8am', '08h')
    .replace('9am', '09h')
    .replace('10am', '10h')
    .replace('11am', '11h')
    .replace('12am', '12h')
    .replace('1pm', '13h')
    .replace('2pm', '14h')
    .replace('3pm', '15h')
    .replace('4pm', '16h')
    .replace('5pm', '17h')
    .replace('6pm', '18h')
    .replace('7pm', '19h')
    .replace('8pm', '20h')
    .replace('9pm', '21h')
    .replace('10pm', '22h')
    .replace('11pm', '23h')
    .replace('12pm', '00h');

  return textToShow;
};
