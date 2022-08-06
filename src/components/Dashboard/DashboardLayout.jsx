/* @flow */
import React from 'react';
import type { Node } from 'react';
import Sidebar from '../Sidebar';
import SidebarProvider from '../Sidebar/SidebarProvider';

type DashboardLayoutProps = {
  children: Node
};

const DashboardLayout = ({ children }: DashboardLayoutProps): Node => (
  <div className='dashboard'>
    <SidebarProvider>
      <Sidebar />
    </SidebarProvider>
    <div className="dashboard-content">
      {
        children
      }
    </div>
  </div>
);

export default DashboardLayout;
