import {FlatList} from 'react-native';
import {ExpandableView} from '../../common/components/ExpandableView';
import {Animal} from '../Types';
import {TopViewAnimal} from './TopViewAnimal';
import {BottomViewAnimal} from './BottomViewAnimal';
import React from 'react';

type AnimalProps = Animal[];

export const AnimalScrollView = ({data}: {data: AnimalProps}) => {
  return (
    <FlatList
      horizontal={false}
      data={data}
      renderItem={animal => (
        <ExpandableView
          topView={<TopViewAnimal animal={animal.item} />}
          expandView={<BottomViewAnimal animal={animal.item} />}
        />
      )}
    />
  );
};
