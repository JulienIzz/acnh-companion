import React, {useState} from 'react';
import {Header} from '../header/Header';
import {MailSubjectInput} from './MailSubjectInput';

export const BugReporting = () => {
  const [mailSubject, setMailSubject] = useState<string>('');

  return (
    <>
      <Header
        headerText="Report de bug"
        headerImagePath={require('../header/img/header_background.jpg')}
      />
      <MailSubjectInput setMailSubject={setMailSubject} />
    </>
  );
};
