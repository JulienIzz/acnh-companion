import {Header} from '../header/Header';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LoadingPage} from '../common/components/LoadingPage';
import {useFetchBugs} from '../common/functions/fetchBugs';
import {useFetchFishes} from '../common/functions/fetchFishes';
import {AnimalScrollView} from '../encyclopedie/components/AnimalScrollView';
import {useState} from 'react';
import {Animal} from '../encyclopedie/Types';
import {Dropdown} from 'react-native-element-dropdown';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {monthData, hourData} from './filterData';
import {filterAnimalList} from './functions/filterAnimalList';
import {getActualMonthAndHour} from './functions/getActualMonthAndHour';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');
const HEADER_SEARCH_TEXT = 'Recherche';

const screenWidth = Dimensions.get('window').width;
const sliderScreenRatio = 0.78;
const maxPrice = {fish: 15000, bug: 12000};
export interface FiltersTypes {
  name: string;
  month: number | null;
  hour: number | null;
  minPrice: number;
  maxPrice: number;
}

export const SearchPage = () => {
  const {data: fishList, isLoading: isFishLoading} = useFetchFishes();
  const {data: bugList, isLoading: isBugLoading} = useFetchBugs();

  const [animalData, setAnimalData] = useState<Animal[] | undefined>(fishList);
  const [filters, setFilters] = useState<FiltersTypes>({
    name: '',
    month: null,
    hour: null,
    minPrice: 0,
    maxPrice: 15000,
  });

  if (!isFishLoading && !isBugLoading && animalData !== undefined) {
    const dynamicMaxValue =
      animalData === fishList ? maxPrice.fish : maxPrice.bug;

    const filteredList = filterAnimalList(animalData, filters);

    return (
      <View style={{flex: 1}}>
        <Header
          headerText={HEADER_SEARCH_TEXT}
          headerImagePath={HEADER_IMAGE_PATH}
        />
        <View style={styles.filterZone}>
          <View style={styles.rowFilterWrapper}>
            <TouchableOpacity
              onPress={() => {
                setAnimalData(fishList);
                setFilters(previousFilters => ({
                  ...previousFilters,
                  minPrice: 0,
                  maxPrice: maxPrice.fish,
                }));
              }}
              style={styles.animalTypeTouchable}>
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
            <TouchableOpacity
              onPress={() => {
                setAnimalData(bugList);
                setFilters(previousFilters => ({
                  ...previousFilters,
                  minPrice: 0,
                  maxPrice: maxPrice.bug,
                }));
              }}
              style={styles.animalTypeTouchable}>
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
            <TextInput
              style={styles.selectZone}
              placeholder="Nom"
              placeholderTextColor={'gray'}
              onChangeText={text =>
                setFilters(previousFilters => ({
                  ...previousFilters,
                  name: text,
                }))
              }
              value={filters.name}
            />
          </View>
          <View style={styles.rowFilterWrapper}>
            <Dropdown
              style={styles.selectZone}
              data={monthData}
              itemTextStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              labelField="label"
              valueField="value"
              placeholder="Mois"
              autoScroll
              value={filters.month}
              placeholderStyle={{color: 'gray'}}
              onChange={item =>
                setFilters(previousFilters => ({
                  ...previousFilters,
                  month: item.value,
                }))
              }
            />
            <TouchableOpacity
              onPress={() => {
                setFilters(previousFilters => ({
                  ...previousFilters,
                  month: getActualMonthAndHour().month,
                  hour: getActualMonthAndHour().hour,
                }));
              }}
              style={styles.animalTypeTouchable}>
              <View
                style={[styles.animalTypeButton, {backgroundColor: '#d4a373'}]}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('./img/actualTime.png')}
                />
              </View>
            </TouchableOpacity>
            <Dropdown
              style={styles.selectZone}
              data={hourData}
              itemTextStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              labelField="label"
              valueField="value"
              placeholder="Heure"
              autoScroll
              value={filters.hour}
              placeholderStyle={{color: 'gray'}}
              onChange={item =>
                setFilters(previousFilters => ({
                  ...previousFilters,
                  hour: item.value,
                }))
              }
            />
          </View>
          <MultiSlider
            values={[filters.minPrice, filters.maxPrice]}
            sliderLength={screenWidth * sliderScreenRatio}
            min={0}
            max={dynamicMaxValue}
            step={1000}
            enableLabel={true}
            customLabel={value => (
              <View style={styles.sliderLabels}>
                <Text style={styles.slideMinMaxPrice}>
                  {value.oneMarkerValue}
                </Text>
                <Text style={styles.sliderPriceText}>PRIX</Text>
                <Text style={styles.slideMinMaxPrice}>
                  {value.twoMarkerValue}
                </Text>
              </View>
            )}
            onValuesChangeFinish={value =>
              setFilters(previousFilters => ({
                ...previousFilters,
                minPrice: value[0],
                maxPrice: value[1],
              }))
            }
          />
        </View>

        <AnimalScrollView data={filteredList} />
      </View>
    );
  } else {
    return <LoadingPage image={HEADER_IMAGE_PATH} text={HEADER_SEARCH_TEXT} />;
  }
};

const styles = StyleSheet.create({
  filterZone: {alignItems: 'center'},
  rowFilterWrapper: {
    width: screenWidth > 420 ? 400 : '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  animalTypeButton: {
    width: 36,
    height: 36,
    borderRadius: 36,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animalTypeTouchable: {
    width: 40,
    height: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectZone: {
    height: 40,
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    alignContent: 'center',
    color: 'black',
  },
  sliderLabels: {
    flexDirection: 'row',
    marginBottom: -12,
    justifyContent: 'space-between',
  },
  slideMinMaxPrice: {color: 'black'},
  sliderPriceText: {fontWeight: 'bold', color: 'black'},
});
