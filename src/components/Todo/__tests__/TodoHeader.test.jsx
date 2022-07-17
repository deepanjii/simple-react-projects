import React from 'react';
import { render } from '@testing-library/react';
import TodoHeader from '../TodoHeader';

describe('TodoHeader', () => {
  test('Should render todo header', () => {
    const { getByText } = render(<TodoHeader />);
    expect(getByText(/todo/i)).toBeTruthy();
  });
});
