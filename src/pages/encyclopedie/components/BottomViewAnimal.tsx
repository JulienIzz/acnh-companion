import React from 'react';
import {SimpleTypography} from '../../../theme/typography/Typography';
import {Animal} from '../Types';

interface BottomViewAnimalProps {
  animal: Animal;
}

export const BottomViewAnimal = ({animal}: BottomViewAnimalProps) => {
  return (
    <>
      <SimpleTypography
        text={'Disponibilité : ' + animal.availability['month-northern']}
      />
      <SimpleTypography text={'Horaire : ' + animal.availability.time} />
      <SimpleTypography
        text={'Localisation : ' + animal.availability.location}
      />
      {animal.shadow ? (
        <SimpleTypography text={'Ombre : ' + animal.shadow} />
      ) : null}
    </>
  );
};
