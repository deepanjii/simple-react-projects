import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects', () => {
  const setup = () => {
    const utils = render(<Projects />, { wrapper: MemoryRouter });
    return utils;
  };

  test('should render Projects page', () => {
    const { getByText } = setup();
    expect(getByText(/projects page/i)).toBeTruthy();
  });

  test('should render projects', () => {
    const { getByText } = setup();
    expect(getByText(/todo app/i)).toBeTruthy();
  });
});
