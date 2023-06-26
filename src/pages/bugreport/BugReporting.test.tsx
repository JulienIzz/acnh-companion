import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {BugReporting} from './BugReporting';

test('icon grid with pressable buttons', async () => {
  render(<BugReporting />);

  const headerOutput = screen.getByText('Aide');

  expect(headerOutput).toBeTruthy();
});
