/* @flow */
import React from 'react';
import type { Node } from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';

const Sidebar = (): Node => (
  <div className='sidebar'>
    <SidebarHeader />
    <SidebarMenu />
  </div>
);

export default Sidebar;
