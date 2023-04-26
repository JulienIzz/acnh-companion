import React from 'react';
import {SimpleTypography} from '../../../theme/typography/Typography';
import {Fish} from '../Types';

interface BottomViewFishProps {
  animal: Fish;
}

export const BottomViewFish = ({animal}: BottomViewFishProps) => {
  return (
    <>
      <SimpleTypography
        text={'Disponibilité : ' + animal.availability['month-northern']}
      />
      <SimpleTypography text={'Horaire : ' + animal.availability.time} />
      <SimpleTypography
        text={'Localisation : ' + animal.availability.location}
      />
      <SimpleTypography text={'Ombre : ' + animal.shadow} />
    </>
  );
};
