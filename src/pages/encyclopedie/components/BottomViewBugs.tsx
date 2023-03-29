import React from 'react';
import {SimpleTypography} from '../../../theme/typography/Typography';
import {FormatDateIntervalIntoString} from '../../common/functions/FormatDateIntervalIntoString';
import {ShowAvailabilityhours} from '../../common/functions/ShowAvailabilityHours';

interface BottomViewBugsProps {
  months: string;
  hours: string;
  location: string;
}
export const BottomViewBugs = ({
  months,
  hours,
  location,
}: BottomViewBugsProps) => {
  return (
    <>
      <SimpleTypography
        text={'Disponibilité : ' + FormatDateIntervalIntoString(months)}
      />
      <SimpleTypography text={'Horaire : ' + ShowAvailabilityhours(hours)} />
      <SimpleTypography text={'Localisation : ' + location} />
    </>
  );
};
