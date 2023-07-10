export type SeaCreature = {
  id: number;
  name: {
    'name-USen': string;
    'name-EUfr': string;
  };
  availability: {
    'month-northern': string;
    'month-southern': string;
    time: string;
    isAllDay: boolean;
    isAllYear: false;
    'month-array-northern': Array<number>;
    'month-array-southern': Array<number>;
    'time-array': Array<number>;
  };
  speed: string;
  shadow: string;
  price: number;
  image_uri: 'https://acnhapi.com/v1/images/sea/1';
  icon_uri: 'https://acnhapi.com/v1/icons/sea/1';
};
