import {Animal} from '../../encyclopedie/Types';
import {CapitalizeFirstLetters} from './CapitalizeString';
import {FormatDateIntervalIntoString} from './FormatDateIntervalIntoString';
import {FormatHoursIntervalIntoString} from './FormatHoursIntervalIntoString';

export const AdaptAnimalData = (animal: Animal | Animal) => {
  animal.availability['month-northern'] = FormatDateIntervalIntoString(
    animal.availability['month-northern'],
  );
  animal.availability.time = FormatHoursIntervalIntoString(
    animal.availability.time,
  );
  animal.name['name-EUfr'] = CapitalizeFirstLetters(animal.name['name-EUfr']);
};
