import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SidebarProvider from '../SidebarProvider';
import SidebarMenuItem from '../SidebarMenuItem';

describe('SidebarMenuItem', () => {
  test('should render SidebarMenuItem', () => {
    const { getByText } = render(
      <SidebarProvider>
        <SidebarMenuItem name='Home' slug='/home' />
      </SidebarProvider>,
      { wrapper: MemoryRouter }
    );

    expect(getByText(/home/i)).toBeInTheDocument();
  });
});
