import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface Props {
  setMailSubject: React.Dispatch<React.SetStateAction<string>>;
}

export const MailSubjectInput = ({setMailSubject}: Props) => {
  return (
    <TextInput
      style={[styles.boxStyle, styles.subjectBoxFormat]}
      placeholder="Sujet"
      placeholderTextColor={'gray'}
      onChangeText={text => setMailSubject(text)}
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
  subjectBoxFormat: {height: 40},
});
