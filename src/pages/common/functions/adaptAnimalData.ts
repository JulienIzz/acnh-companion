import {Animal} from '../../encyclopedie/Types';
import {capitalizeFirstLetters} from './capitalizeString';
import {formatDateIntervalIntoString} from './formatDateIntervalIntoString';
import {formatHoursIntervalIntoString} from './formatHoursIntervalIntoString';

export const adaptAnimalData = (animal: Animal | Animal) => {
  animal.availability['month-northern'] = formatDateIntervalIntoString(
    animal.availability['month-northern'],
  );
  animal.availability.time = formatHoursIntervalIntoString(
    animal.availability.time,
  );
  animal.name['name-EUfr'] = capitalizeFirstLetters(animal.name['name-EUfr']);
};