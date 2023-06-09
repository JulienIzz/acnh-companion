import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {globalStyle} from './BugReporting';

interface Props {
  setMailSubject: React.Dispatch<React.SetStateAction<string>>;
}

export const MailSubjectInput = ({setMailSubject}: Props) => {
  return (
    <TextInput
      style={[globalStyle.boxStyle, styles.subjectBoxFormat]}
      placeholder="Sujet"
      placeholderTextColor={'gray'}
      onChangeText={text => setMailSubject(text)}
    />
  );
};

const styles = StyleSheet.create({
  subjectBoxFormat: {height: 40},
});
