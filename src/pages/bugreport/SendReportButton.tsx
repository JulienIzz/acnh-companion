import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  mailSubject: string;
  mailBody: string;
}

const contactMail = 'julien.izzillo@gmail.com';

export const SendReportButton = ({mailSubject, mailBody}: Props) => {
  const mailToStringWithInputParameters =
    'mailto:' + contactMail + '?subject=' + mailSubject + '&body=' + mailBody;

  return (
    <TouchableOpacity
      style={styles.boxStyle}
      onPress={() => Linking.openURL(mailToStringWithInputParameters)}>
      <Text style={styles.buttonTextStyle}>Envoyer le message</Text>
    </TouchableOpacity>
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
  buttonTextStyle: {fontWeight: 'bold', color: 'black', alignSelf: 'center'},
});
