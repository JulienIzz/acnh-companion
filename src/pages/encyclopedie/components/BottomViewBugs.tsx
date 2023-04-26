import React from 'react';
import {SimpleTypography} from '../../../theme/typography/Typography';
import {Bug} from '../Types';

interface BottomViewBugsProps {
  animal: Bug;
}

export const BottomViewBugs = ({animal}: BottomViewBugsProps) => {
  return (
    <>
      <SimpleTypography
        text={'Disponibilité : ' + animal.availability['month-northern']}
      />
      <SimpleTypography text={'Horaire : ' + animal.availability.time} />
      <SimpleTypography
        text={'Localisation : ' + animal.availability.location}
      />
    </>
  );
};
