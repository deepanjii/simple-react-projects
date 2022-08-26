import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Achievements from '../Achievements';

test('should render Achievements page', () => {
  const { getByText } = render(<Achievements />, { wrapper: MemoryRouter });
  expect(getByText(/achievements page/i)).toBeTruthy();
});
