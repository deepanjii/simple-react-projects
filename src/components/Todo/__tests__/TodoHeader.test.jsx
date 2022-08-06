import React from 'react';
import { render } from '@testing-library/react';
import TodoHeader from '../TodoHeader';
import TodoThemeProvider from '../TodoThemeProvider';

describe('TodoHeader', () => {
  test('Should render todo header', () => {
    const { getByText } = render(
      <TodoThemeProvider>
        <TodoHeader />
      </TodoThemeProvider>
    );
    expect(getByText(/todo/i)).toBeTruthy();
  });
});
