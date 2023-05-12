import {Header} from '../header/Header';
import {View} from 'react-native';
import {LoadingPage} from '../common/components/LoadingPage';
import {useFetchBugs} from '../common/functions/FetchBugs';
import {useFetchFishes} from '../common/functions/FetchFishes';
import {AnimalScrollView} from '../encyclopedie/components/AnimalScrollView';
import {useState} from 'react';
import {Animal} from '../encyclopedie/Types';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');
const HEADER_SEARCH_TEXT = 'Recherche';

export const SearchPage = () => {
  const {data: fishList, isLoading: isFishLoading} = useFetchFishes();
  const {data: bugList, isLoading: isBugLoading} = useFetchBugs();
  const [animalData, setAnimalData] = useState<Animal[] | undefined>(fishList);
  if (!isFishLoading && !isBugLoading) {
    return (
      <View style={{flex: 1}}>
        <Header
          headerText={HEADER_SEARCH_TEXT}
          headerImagePath={HEADER_IMAGE_PATH}
        />
        <AnimalScrollView data={animalData} />
      </View>
    );
  } else {
    return <LoadingPage image={HEADER_IMAGE_PATH} text={HEADER_SEARCH_TEXT} />;
  }
};
