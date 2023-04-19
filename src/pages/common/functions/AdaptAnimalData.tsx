import {Bug, Fish} from '../../encyclopedie/Types';
import {FormatDateIntervalIntoString} from './FormatDateIntervalIntoString';
import {FormatHoursIntervalIntoString} from './FormatHoursIntervalIntoString';

export const AdaptAnimalData = (animal: Fish | Bug) => {
  animal.availability['month-northern'] = FormatDateIntervalIntoString(
    animal.availability['month-northern'],
  );
  animal.availability.time = FormatHoursIntervalIntoString(
    animal.availability.time,
  );
};
