import {FlatList, ActivityIndicator} from 'react-native';
import {ExpandableView} from '../../common/components/ExpandableView';
import {Fish, Bug} from '../Types';
import {BottomViewBugs} from './BottomViewBugs';
import {TopViewAnimal} from './TopViewAnimal';
import {BottomViewFish} from './BottomViewFish';
import React from 'react';

type AnimalProps = {type: 'fish'; data: Fish[]} | {type: 'bug'; data: Bug[]};

export const AnimalScrollView = ({type, data}: AnimalProps) => {
  if (type === 'fish') {
    return (
      <FlatList
        horizontal={false}
        data={data}
        renderItem={animal => (
          <ExpandableView
            topView={<TopViewAnimal animal={animal.item} />}
            expandView={<BottomViewFish animal={animal.item} />}
          />
        )}
      />
    );
  }
  if (type === 'bug') {
    return (
      <FlatList
        horizontal={false}
        data={data}
        renderItem={animal => (
          <ExpandableView
            topView={<TopViewAnimal animal={animal.item} />}
            expandView={<BottomViewBugs animal={animal.item} />}
          />
        )}
      />
    );
  } else {
    return <ActivityIndicator />;
  }
};
