import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SidebarProvider from '../SidebarProvider';
import SidebarMenuItem from '../SidebarMenuItem';

describe('SidebarMenuItem', () => {
  test('should render SidebarMenuItem', () => {
    const { queryByText } = render(
      <SidebarProvider>
        <SidebarMenuItem name='Home' slug='/home' icon='home' />
      </SidebarProvider>,
      { wrapper: MemoryRouter }
    );

    expect(queryByText('Home')).toBeInTheDocument();
  });
});
