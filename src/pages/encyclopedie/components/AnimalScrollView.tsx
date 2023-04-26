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
            topView={
              <TopViewAnimal
                name={animal.item.name['name-EUfr']}
                rarity={animal.item.availability.rarity}
                price={animal.item.price}
                icon={animal.item.icon_uri}
              />
            }
            expandView={
              <BottomViewFish
                months={animal.item.availability['month-northern']}
                hours={animal.item.availability.time}
                location={animal.item.availability.location}
                shadow={animal.item.shadow}
              />
            }
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
            topView={
              <TopViewAnimal
                name={animal.item.name['name-EUfr']}
                rarity={animal.item.availability.rarity}
                price={animal.item.price}
                icon={animal.item.icon_uri}
              />
            }
            expandView={
              <BottomViewBugs
                months={animal.item.availability['month-northern']}
                hours={animal.item.availability.time}
                location={animal.item.availability.location}
              />
            }
          />
        )}
      />
    );
  } else {
    return <ActivityIndicator />;
  }
};
