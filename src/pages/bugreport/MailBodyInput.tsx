import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface Props {
  setMailBody: React.Dispatch<React.SetStateAction<string>>;
}

export const MailBodyInput = ({setMailBody}: Props) => {
  return (
    <TextInput
      style={[styles.boxStyle, styles.bodyBoxFormat]}
      multiline={true}
      placeholder="Votre message"
      placeholderTextColor={'gray'}
      onChangeText={text => setMailBody(text)}
    />
  );
};

const styles = StyleSheet.create({
  boxStyle: {
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: '#FAEDCD',
    borderColor: '#D4A373',
    borderRadius: 10,
    borderWidth: 3,
    padding: 8,
  },
  bodyBoxFormat: {
    height: 200,
    textAlignVertical: 'top',
  },
});
