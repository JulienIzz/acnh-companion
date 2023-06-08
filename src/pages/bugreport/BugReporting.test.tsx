import {render, screen} from '@testing-library/react-native';
import {BugReporting} from './BugReporting';

test('icon grid with pressable buttons', async () => {
  render(<BugReporting />);

  const headerOutput = screen.getByText('Report de bug');

  expect(headerOutput).toBeTruthy();
});
