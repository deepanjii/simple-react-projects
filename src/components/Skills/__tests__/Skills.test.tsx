import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Skills from '../Skills';

test('should render Skills page', () => {
  const { getByText } = render(<Skills />, { wrapper: MemoryRouter });
  expect(getByText(/skills page/i)).toBeTruthy();
});
