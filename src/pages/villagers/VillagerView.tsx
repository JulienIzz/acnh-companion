import React from 'react';
import {View, Image} from 'react-native';
import {SimpleTypography} from '../../theme/typography/Typography';
import {StyleSheet} from 'react-native';
import {Villager} from './VillagerType';

interface Props {
  villager: Villager;
}

export const VillagerView = ({villager}: Props) => {
  return (
    <View style={styles.animalCard}>
      <View style={styles.animalID}>
        <SimpleTypography text={'Nom : ' + villager.name['name-EUfr']} />
        <SimpleTypography text={'Personnalité : ' + villager.personality} />
        <SimpleTypography
          text={'Anniversaire : ' + villager['birthday-string']}
        />
        <SimpleTypography text={'Sexe : ' + villager.gender} />
        <SimpleTypography text={'Espèce : ' + villager.species} />
      </View>
      <Image
        style={styles.animalImage}
        source={{
          uri: villager.icon_uri,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  animalCard: {
    backgroundColor: '#FAEDCD',
    borderColor: '#D4A373',
    borderRadius: 10,
    borderWidth: 3,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  animalID: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  animalImage: {
    width: 80,
    height: 80,
    margin: 5,
  },
});
