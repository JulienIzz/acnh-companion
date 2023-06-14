export interface Villager {
  id: number;
  name: {
    'name-USen': string;
    'name-EUfr': string;
  };
  personality: string;
  'birthday-string': string;
  birthday: string;
  species: string;
  gender: string;
  'catch-phrase': string;
  icon_uri: string;
  image_uri: string;
}
