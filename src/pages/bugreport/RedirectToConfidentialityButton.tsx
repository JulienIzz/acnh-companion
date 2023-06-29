import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {globalStyle} from './BugReporting';

const url = 'https://papyroach.github.io/confidentiality.html';

export const RedirectToConfidentialityButton = () => {
  return (
    <TouchableOpacity
      style={globalStyle.boxStyle}
      onPress={() => Linking.openURL(url)}>
      <Text style={styles.buttonTextStyle}>Politique de confidentialité</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonTextStyle: {fontWeight: 'bold', color: 'black', alignSelf: 'center'},
});
