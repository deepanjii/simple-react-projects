import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import SidebarProvider from '../SidebarProvider';
import SidebarMenu from '../SidebarMenu';

describe('SidebarMenu', () => {
  test('should render sidebar menu', () => {
    const { getByText } = render(
      <SidebarProvider>
        <SidebarMenu />
      </SidebarProvider>,
      { wrapper: MemoryRouter }
    );

    expect(getByText(/home/i)).toBeInTheDocument();
    expect(getByText(/projects/i)).toBeInTheDocument();
    expect(getByText(/skill/i)).toBeInTheDocument();
    expect(getByText(/achievements/i)).toBeInTheDocument();
  });
});
