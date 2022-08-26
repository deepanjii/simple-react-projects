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
    const { getByRole, queryByText } = setup();
    const profilePic = getByRole('img');

    // Render header
    expect(queryByText(/deepan a/i)).toBeInTheDocument();
    expect(profilePic).toHaveAttribute('src', ProfilePic);
    expect(profilePic).toHaveAttribute('alt', 'deepan profile pic');

    // Render menu
    expect(queryByText('Home')).toBeInTheDocument();
    expect(queryByText(/projects/i)).toBeInTheDocument();
    expect(queryByText(/skill/i)).toBeInTheDocument();
    expect(queryByText(/achievements/i)).toBeInTheDocument();
  });

  test('should switch active menu on clicking menu item', () => {
    const { getByRole } = setup();
    const homeMenu = getByRole('link', { name: /home/i });
    const projectMenu = getByRole('link', { name: /projects/i });

    // default active menu
    expect(homeMenu.className).toContain('active');

    // switch active menu
    fireEvent.click(projectMenu);

    // current active menu
    expect(projectMenu.className).toContain('active');
  });
});
