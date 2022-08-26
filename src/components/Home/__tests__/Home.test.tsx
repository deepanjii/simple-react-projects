import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from '../Home';

test('should render Home page', () => {
  const { getByText } = render(<Home />, { wrapper: MemoryRouter });
  expect(getByText(/home page/i)).toBeTruthy();
});
