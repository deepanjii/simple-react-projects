import React from 'react';
import { render } from '@testing-library/react';
import ProfilePic from '../../../assets/images/profile_pic.jpg';
import SidebarProvider from '../SidebarProvider';
import SidebarHeader from '../SidebarHeader';

describe('SidebarHeader', () => {
  test('should render header with name and profile pic', () => {
    const { getByRole, queryByText } = render(
      <SidebarProvider>
        <SidebarHeader />
      </SidebarProvider>
    );
    const profilePic = getByRole('img');

    expect(queryByText(/deepan a/i)).toBeInTheDocument();
    expect(profilePic).toHaveAttribute('src', ProfilePic);
    expect(profilePic).toHaveAttribute('alt', 'deepan profile pic');
  });
});
