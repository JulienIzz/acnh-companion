import React from 'react';
import {Header} from '../header/Header';

const HEADER_TEXT = 'Créatures Marines';
const HEADER_IMAGE = require('../header/img/header_background.jpg');

export const SeaCreatures = () => {
  return <Header headerText={HEADER_TEXT} headerImagePath={HEADER_IMAGE} />;
};
