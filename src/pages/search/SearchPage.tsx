import React from 'react';
import {Header} from '../header/Header';
import {
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LoadingPage} from '../common/components/LoadingPage';
import {useFetchBugs} from '../common/functions/fetchBugs';
import {useFetchFishes} from '../common/functions/fetchFishes';
import {AnimalScrollView} from '../encyclopedie/components/AnimalScrollView';
import {useReducer, useState} from 'react';
import {Animal} from '../encyclopedie/Types';
import {Dropdown} from 'react-native-element-dropdown';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {monthData, hourData} from './filterData';
import {filterAnimalList} from './functions/filterAnimalList';
import {getActualMonthAndHour} from './functions/getActualMonthAndHour';
import {resetFilters} from './functions/resetFilters';
import {customLabelComponent} from './customLabelComponent';
const HEADER_IMAGE_PATH = require('../header/img/header_background.jpg');
const HEADER_SEARCH_TEXT = 'Recherche';

const screenWidth = Dimensions.get('window').width;
const sliderScreenRatio = 0.78;
const maxPrice = {fish: 15000, bug: 12000};
const redColor = '#E7401D';
const tanColor = '#D4A373';

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
  const [filters, updateFilters] = useReducer(
    (previousFilters: FiltersTypes, nextFilters: Partial<FiltersTypes>) => {
      return {...previousFilters, ...nextFilters};
    },
    {
      name: '',
      month: null,
      hour: null,
      minPrice: 0,
      maxPrice: 15000,
    },
  );

  if (!isFishLoading && !isBugLoading && animalData !== undefined) {
    const dynamicMaxValue =
      animalData === fishList ? maxPrice.fish : maxPrice.bug;

    const filteredList = filterAnimalList(animalData, filters);

    return (
      <>
        <Header
          headerText={HEADER_SEARCH_TEXT}
          headerImagePath={HEADER_IMAGE_PATH}
        />
        <View style={styles.filterZone}>
          <View style={styles.rowFilterWrapper}>
            <TouchableOpacity
              onPress={() => {
                setAnimalData(fishList);
                updateFilters({
                  minPrice: 0,
                  maxPrice: maxPrice.fish,
                });
              }}
              style={styles.animalTypeTouchable}>
              <View
                style={[
                  styles.animalTypeButton,
                  animalData === fishList
                    ? styles.tanBackGround
                    : styles.greyBackGround,
                ]}>
                <Image style={styles.icon} source={require('./img/fish.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setAnimalData(bugList);
                updateFilters({
                  minPrice: 0,
                  maxPrice: maxPrice.bug,
                });
              }}
              style={styles.animalTypeTouchable}>
              <View
                style={[
                  styles.animalTypeButton,
                  animalData === bugList
                    ? styles.tanBackGround
                    : styles.greyBackGround,
                ]}>
                <Image style={styles.icon} source={require('./img/bug.png')} />
              </View>
            </TouchableOpacity>
            <TextInput
              style={styles.selectZone}
              placeholder="Nom"
              placeholderTextColor={'gray'}
              onChangeText={text =>
                updateFilters({
                  name: text,
                })
              }
              value={filters.name}
            />
            <TouchableOpacity
              onPress={resetFilters(updateFilters, dynamicMaxValue)}
              style={styles.animalTypeTouchable}>
              <View style={[styles.animalTypeButton, styles.redBackGround]}>
                <Image
                  style={styles.crossIcon}
                  source={require('./img/cross.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowFilterWrapper}>
            <Dropdown
              style={styles.selectZone}
              data={monthData}
              itemTextStyle={styles.blackColor}
              selectedTextStyle={styles.blackColor}
              labelField="label"
              valueField="value"
              placeholder="Mois"
              autoScroll
              value={filters.month}
              placeholderStyle={styles.greyColor}
              onChange={item =>
                updateFilters({
                  month: item.value,
                })
              }
            />
            <TouchableOpacity
              onPress={() => {
                updateFilters({
                  month: getActualMonthAndHour().month,
                  hour: getActualMonthAndHour().hour,
                });
              }}
              style={styles.animalTypeTouchable}>
              <View
                style={[styles.animalTypeButton, {backgroundColor: tanColor}]}>
                <Image
                  style={styles.calendarIcon}
                  source={require('./img/actualTime.png')}
                />
              </View>
            </TouchableOpacity>
            <Dropdown
              style={styles.selectZone}
              data={hourData}
              itemTextStyle={styles.blackColor}
              selectedTextStyle={styles.blackColor}
              labelField="label"
              valueField="value"
              placeholder="Heure"
              autoScroll
              value={filters.hour}
              placeholderStyle={styles.greyColor}
              onChange={item =>
                updateFilters({
                  hour: item.value,
                })
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
            customLabel={customLabelComponent}
            onValuesChangeFinish={value =>
              updateFilters({
                minPrice: value[0],
                maxPrice: value[1],
              })
            }
          />
        </View>

        <AnimalScrollView data={filteredList} />
      </>
    );
  } else {
    return <LoadingPage image={HEADER_IMAGE_PATH} text={HEADER_SEARCH_TEXT} />;
  }
};

export const styles = StyleSheet.create({
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
  icon: {width: 25, height: 25},
  calendarIcon: {width: 20, height: 20},
  crossIcon: {width: 15, height: 15},
  redBackGround: {backgroundColor: redColor},
  tanBackGround: {backgroundColor: tanColor},
  greyBackGround: {backgroundColor: 'grey'},
  blackColor: {color: 'black'},
  greyColor: {color: 'grey'},
});
