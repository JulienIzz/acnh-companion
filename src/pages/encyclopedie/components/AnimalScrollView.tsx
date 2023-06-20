import {FlashList} from '@shopify/flash-list';
import {ExpandableView} from '../../common/components/ExpandableView';
import {Animal} from '../Types';
import {TopViewAnimal} from './TopViewAnimal';
import {BottomViewAnimal} from './BottomViewAnimal';
import React, {useState} from 'react';

type AnimalProps = Animal[];

export const AnimalScrollView = ({data}: {data: AnimalProps}) => {
  const [expandedViewID, setExpandedViewID] = useState<number | null>(null);

  return (
    <FlashList
      horizontal={false}
      data={data}
      extraData={expandedViewID}
      estimatedItemSize={150}
      renderItem={animal => (
        <ExpandableView
          isExpanded={animal.extraData === animal.item.id ? true : false}
          setExpandedViewID={setExpandedViewID}
          currentAnimalID={animal.item.id}
          topView={<TopViewAnimal animal={animal.item} />}
          expandView={<BottomViewAnimal animal={animal.item} />}
        />
      )}
    />
  );
};
