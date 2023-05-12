import {Header} from '../header/Header';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {LoadingPage} from '../common/components/LoadingPage';
import {useFetchBugs} from '../common/functions/FetchBugs';
import {useFetchFishes} from '../common/functions/FetchFishes';
import {AnimalScrollView} from '../encyclopedie/components/AnimalScrollView';
import {useState} from 'react';
import {Animal} from '../encyclopedie/Types';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');
const HEADER_SEARCH_TEXT = 'Recherche';

const screenWidth = Dimensions.get('window').width;

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
        <View style={styles.filterZone}>
          <View style={styles.rowFilterWrapper}>
            <TouchableOpacity onPress={() => setAnimalData(fishList)}>
              <View
                style={[
                  styles.animalTypeButton,
                  {
                    backgroundColor:
                      animalData === fishList ? '#d4a373' : 'gray',
                  },
                ]}>
                <Image
                  style={{width: 25, height: 25}}
                  source={require('./img/fish.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAnimalData(bugList)}>
              <View
                style={[
                  styles.animalTypeButton,
                  {
                    backgroundColor:
                      animalData === bugList ? '#d4a373' : 'gray',
                  },
                ]}>
                <Image
                  style={{width: 25, height: 25}}
                  source={require('./img/bug.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <AnimalScrollView data={animalData} />
      </View>
    );
  } else {
    return <LoadingPage image={HEADER_IMAGE_PATH} text={HEADER_SEARCH_TEXT} />;
  }
};

const styles = StyleSheet.create({
  filterZone: {alignItems: 'center'},
  rowFilterWrapper: {
    width: screenWidth > 420 ? 350 : '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  animalTypeButton: {
    width: 36,
    height: 36,
    margin: 10,
    borderRadius: 36,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
