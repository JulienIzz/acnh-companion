import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {globalStyle} from './BugReporting';

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
      style={globalStyle.boxStyle}
      onPress={() => Linking.openURL(mailToStringWithInputParameters)}>
      <Text style={styles.buttonTextStyle}>Envoyer le message</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonTextStyle: {fontWeight: 'bold', color: 'black', alignSelf: 'center'},
});
