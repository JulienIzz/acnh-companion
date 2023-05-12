import {Header} from '../header/Header';
import {View} from 'react-native';
import {LoadingPage} from '../common/components/LoadingPage';
import {useFetchBugs} from '../common/functions/FetchBugs';
import {useFetchFishes} from '../common/functions/FetchFishes';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');
const HEADER_SEARCH_TEXT = 'Recherche';

export const SearchPage = () => {
  const {data: fishList, isLoading: isFishLoading} = useFetchFishes();
  const {data: bugList, isLoading: isBugLoading} = useFetchBugs();
  if (!isFishLoading && !isBugLoading) {
    return (
      <View style={{flex: 1}}>
        <Header
          headerText={HEADER_SEARCH_TEXT}
          headerImagePath={HEADER_IMAGE_PATH}
        />
      </View>
    );
  } else {
    return <LoadingPage image={HEADER_IMAGE_PATH} text={HEADER_SEARCH_TEXT} />;
  }
};
