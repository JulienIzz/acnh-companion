import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {IconTypography} from '../../../theme/typography/Typography';
import {useNavigation} from '@react-navigation/native';
import {ButtonData} from './HomeButtonsData';

type ButtonDataProps = {
  label: ButtonData['label'];
  imagePath: ButtonData['imagePath'];
  navigationTarget: ButtonData['navigationTarget'];
};

type HomeButtonProps = ButtonDataProps & {
  containerStyle?: StyleProp<ViewStyle>;
};

const BUTTON_ICON_HEIGHT_AND_WIDTH = 100;

export const HomeButton = ({
  navigationTarget,
  imagePath,
  label,
  containerStyle,
}: HomeButtonProps) => {
  const navigation = useNavigation();

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate(navigationTarget)}>
        <Image style={styles.image} source={imagePath} />
      </TouchableOpacity>
      <IconTypography text={label} />
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    height: BUTTON_ICON_HEIGHT_AND_WIDTH,
    width: BUTTON_ICON_HEIGHT_AND_WIDTH,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
