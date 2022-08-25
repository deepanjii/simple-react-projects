import React from 'react';
import { Sidebar, SidebarProvider } from '../Sidebar';

interface DashboardLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const DashboardLayout = ({ children }: DashboardLayoutProps): JSX.Element => (
  <div className='dashboard'>
    <SidebarProvider>
      <Sidebar />
    </SidebarProvider>
    <div className="dashboard-content">{children}</div>
  </div>
);

export default DashboardLayout;
