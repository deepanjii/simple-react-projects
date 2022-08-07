import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  const setup = () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    const utils = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
      root
    );
    return utils;
  }

  test('should switch to different routes', async() => {  
    const { getByText } = setup();

    expect(getByText(/home page/i)).toBeInTheDocument();

    // Switch to projects page
    act(() => {
      const projectMenu = getByText(/projects/i);
      fireEvent.click(projectMenu);
    });

    expect(getByText(/todo app/i)).toBeInTheDocument();

    // Switch to skills page
    act(() => {
      const skillsMenu = getByText(/skills/i);
      fireEvent.click(skillsMenu);
    });

    expect(getByText(/skills page/i)).toBeInTheDocument();


    // Switch to achievements page
    act(() => {
      const achievementsMenu = getByText(/achievements/i);
      fireEvent.click(achievementsMenu);
    });

    expect(getByText(/achievements page/i)).toBeInTheDocument();

    // Switch to home page
    act(() => {
      const homeMenu = getByText(/home/i);
      fireEvent.click(homeMenu);
    });

    expect(getByText(/home page/i)).toBeInTheDocument();
  });
});