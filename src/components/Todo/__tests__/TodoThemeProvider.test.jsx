import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoThemeProvider from '../TodoThemeProvider';
import TodoHeader from '../TodoHeader';
import useTheme from '../../../hooks/useTheme';

const TestComponent = () => {
  const { theme } = useTheme();
  return (
    <div className={`todo todo--${theme}`} data-testid="todo-bg-div">
      <div className="todo-container">
        <TodoHeader />
      </div>
    </div>
  );
};

describe('Todo Theme Provider', () => {
  const setup = () => {
    const utils = render(
      <TodoThemeProvider>
        <TestComponent />
      </TodoThemeProvider>
    );

    return utils;
  };

  test('should switch theme', () => {
    const { container, getByRole } = setup();
    const themeSwitchButton = getByRole('button', { name: 'theme switch' });

    // Should have light theme
    expect(container.getElementsByClassName('todo--light')[0]).toBeTruthy();
    expect(container.getElementsByClassName('todo--dark')[0]).not.toBeTruthy();

    // trigger theme switch
    fireEvent.click(themeSwitchButton);

    // should have dark theme
    expect(container.getElementsByClassName('todo--light')[0]).not.toBeTruthy();
    expect(container.getElementsByClassName('todo--dark')[0]).toBeTruthy();

    // trigger theme switch
    fireEvent.click(themeSwitchButton);

    // Should have light theme
    expect(container.getElementsByClassName('todo--light')[0]).toBeTruthy();
    expect(container.getElementsByClassName('todo--dark')[0]).not.toBeTruthy();
  });
});
