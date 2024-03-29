import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {Header} from '../../header/Header';

type Props = {
  image: ImageSourcePropType;
  text: string;
};

export function LoadingPage({image, text}: Props) {
  return (
    <View style={styles.pageWrapper} testID="Loader">
      <Header headerImagePath={image} headerText={text} />
      <View style={styles.loaderPage}>
        <ActivityIndicator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loaderPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageWrapper: {
    flex: 1,
  },
});
