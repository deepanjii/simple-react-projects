import React from 'react';
import { render } from '@testing-library/react';
import Todo from '../Todo';

describe('Todo', () => {
  test.only('renders without error', async () => {
    const { getByText } =  render(<Todo />);
    expect(getByText(/todo/i)).toBeTruthy();
  });
});
