import React from 'react';
import {View, Image} from 'react-native';
import {SimpleTypography} from '../../../theme/typography/Typography';
import {StyleSheet} from 'react-native';
import {Animal} from '../Types';

interface TopViewProps {
  animal: Animal;
}

export const TopViewAnimal = ({animal}: TopViewProps) => {
  return (
    <>
      <View style={styles.animalID}>
        <SimpleTypography text={'Nom : ' + animal.name['name-EUfr']} />
        <SimpleTypography text={'Rareté : ' + animal.availability.rarity} />
        <SimpleTypography text={'Prix : ' + animal.price} />
      </View>
      <View style={styles.animalImageContainer}>
        <Image
          style={styles.animalImage}
          source={{
            uri: animal.icon_uri,
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  animalCard: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FAEDCD',
    borderColor: '#D4A373',
    borderRadius: 10,
    borderWidth: 3,
    margin: 5,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  animalID: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  animalImage: {
    width: '100%',
    height: '100%',
  },
  animalImageContainer: {
    width: 80,
    height: 80,
    margin: 5,
  },
});
