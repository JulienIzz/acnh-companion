import React, {useState} from 'react';
import {Header} from '../header/Header';
import {MailBodyInput} from './MailBodyInput';
import {MailSubjectInput} from './MailSubjectInput';
import {SendReportButton} from './SendReportButton';

export const BugReporting = () => {
  const [mailSubject, setMailSubject] = useState<string>('');
  const [mailBody, setMailBody] = useState<string>('');

  return (
    <>
      <Header
        headerText="Report de bug"
        headerImagePath={require('../header/img/header_background.jpg')}
      />
      <MailSubjectInput setMailSubject={setMailSubject} />
      <MailBodyInput setMailBody={setMailBody} />
      <SendReportButton mailSubject={mailSubject} mailBody={mailBody} />
    </>
  );
};
