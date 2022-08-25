import React from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';

const Sidebar = (): JSX.Element => (
  <div className='sidebar'>
    <SidebarHeader />
    <SidebarMenu />
  </div>
);

export default Sidebar;
