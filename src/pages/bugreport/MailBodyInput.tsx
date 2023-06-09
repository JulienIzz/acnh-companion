import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {globalStyle} from './BugReporting';

interface Props {
  setMailBody: React.Dispatch<React.SetStateAction<string>>;
}

export const MailBodyInput = ({setMailBody}: Props) => {
  return (
    <TextInput
      style={[globalStyle.boxStyle, styles.bodyBoxFormat]}
      multiline={true}
      placeholder="Votre message"
      placeholderTextColor={'gray'}
      onChangeText={text => setMailBody(text)}
    />
  );
};

const styles = StyleSheet.create({
  bodyBoxFormat: {
    height: 200,
    textAlignVertical: 'top',
  },
});
