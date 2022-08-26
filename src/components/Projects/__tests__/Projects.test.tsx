import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects', () => {
  const setup = () => {
    const utils = render(<Projects />, { wrapper: MemoryRouter });
    return utils;
  };

  test('should render projects', () => {
    const { getByText } = setup();
    expect(getByText(/todo app/i)).toBeTruthy();
    expect(getByText(/natours/i)).toBeTruthy();
    expect(getByText(/trillio/i)).toBeTruthy();
    expect(getByText(/nexter/i)).toBeTruthy();
  });
});
