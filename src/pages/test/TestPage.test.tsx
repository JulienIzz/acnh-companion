import {render, screen} from '@testing-library/react-native';
import {TestPage} from './TestPage';

test('icon grid with pressable buttons', async () => {
  render(<TestPage />);

  const headerOutput = screen.getByText('Page de test');

  expect(headerOutput).toBeTruthy();
});
