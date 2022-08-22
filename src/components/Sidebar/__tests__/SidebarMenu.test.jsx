import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import SidebarProvider from '../SidebarProvider';
import SidebarMenu from '../SidebarMenu';

describe('SidebarMenu', () => {
  test('should render sidebar menu', () => {
    const { queryByText } = render(
      <SidebarProvider>
        <SidebarMenu />
      </SidebarProvider>,
      { wrapper: MemoryRouter }
    );

    expect(queryByText('Home')).toBeInTheDocument();
    expect(queryByText(/projects/i)).toBeInTheDocument();
    expect(queryByText(/skill/i)).toBeInTheDocument();
    expect(queryByText(/achievements/i)).toBeInTheDocument();
  });
});
