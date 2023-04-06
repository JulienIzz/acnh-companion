import {Header} from './Header';
import React from 'react';
import {render, screen} from '@testing-library/react-native';

test('header with some text', async () => {
  // PARTIE 1 : On rend le composant avec les constantes qu'on veut
  const expectedHeaderTextForTest = 'Mock Text Header';
  const expectedHeaderImageForTest = require('./img/header_background.jpg');

  render(
    <Header
      headerText={expectedHeaderTextForTest}
      headerImagePath={expectedHeaderImageForTest}
    />,
  );

  // PARTIE 2 : On cherche les données qu'on veut vérifier dans le composant rendu / On vérifie les comportements
  const HeaderOutput = screen.getByText(expectedHeaderTextForTest);

  // PARTIE 3 : On fait des vérifications
  expect(HeaderOutput).toBeTruthy();
  expect(screen.toJSON()).toMatchSnapshot();
});
