import React from 'react';
import {SimpleTypography} from '../../../theme/typography/Typography';
import {ShowAvailabilityhours} from '../../common/functions/ShowAvailabilityHours';
import {FormatDateIntervalIntoString} from '../../common/functions/FormatDateIntervalIntoString';

interface BottomViewFishProps {
  months: string;
  hours: string;
  location: string;
  shadow: string;
}
export const BottomViewFish = ({
  months,
  hours,
  location,
  shadow,
}: BottomViewFishProps) => {
  return (
    <>
      <SimpleTypography
        text={'Disponibilité : ' + FormatDateIntervalIntoString(months)}
      />
      <SimpleTypography text={'Horaire : ' + ShowAvailabilityhours(hours)} />
      <SimpleTypography text={'Localisation : ' + location} />
      <SimpleTypography text={'Ombre : ' + shadow} />
    </>
  );
};
