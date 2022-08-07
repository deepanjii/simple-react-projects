import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProfilePic from '../../../assets/images/profile_pic.jpg';
import SidebarProvider from '../SidebarProvider';
import Sidebar from '../Sidebar';

describe('SidebarHeader', () => {
  const setup = () => {
    const utils = render(
      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>,
      { wrapper: MemoryRouter }
    );

    return utils;
  };

  test('should render header with name and profile pic', () => {
    const { getByRole, getByText } = setup();
    const profilePic = getByRole('img');

    // Render header
    expect(getByText(/deepan a/i)).toBeInTheDocument();
    expect(profilePic).toHaveAttribute('src', ProfilePic);
    expect(profilePic).toHaveAttribute('alt', 'deepan profile pic');

    // Render menu
    expect(getByText(/home/i)).toBeInTheDocument();
    expect(getByText(/projects/i)).toBeInTheDocument();
    expect(getByText(/skill/i)).toBeInTheDocument();
    expect(getByText(/achievements/i)).toBeInTheDocument();
  });

  test('should switch active menu on clicking menu item', () => {
    const { getByText } = setup();
    const homeMenu = getByText(/home/i);
    const projectMenu = getByText(/projects/i);

    // default active menu
    expect(homeMenu.className).toContain('active');

    // switch active menu
    fireEvent.click(projectMenu);

    // current active menu
    expect(projectMenu.className).toContain('active');
  });
});
