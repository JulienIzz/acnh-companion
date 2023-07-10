import {SeaCreature} from '../../seacreatures/Types';
import {capitalizeFirstLetters} from './capitalizeString';
import {formatDateIntervalIntoString} from './formatDateIntervalIntoString';
import {formatHoursIntervalIntoString} from './formatHoursIntervalIntoString';

export const adaptSeaCreatureData = (seaCreature: SeaCreature) => {
  seaCreature.availability['month-northern'] = formatDateIntervalIntoString(
    seaCreature.availability['month-northern'],
  );
  seaCreature.availability.time = formatHoursIntervalIntoString(
    seaCreature.availability.time,
  );
  seaCreature.name['name-EUfr'] = capitalizeFirstLetters(
    seaCreature.name['name-EUfr'],
  );
};
