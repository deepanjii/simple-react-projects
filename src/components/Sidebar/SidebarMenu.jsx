import React from 'react';
import SidebarMenuItem from './SidebarMenuItem';
import useSidebar from '../../hooks/useSidebar';

const SidebarMenu = () => {
  const { menus } = useSidebar();
  return (
    <div className="sidebar__menu">
      {
        menus.map(menu => (
          <SidebarMenuItem key={menu.name} name={menu.name} slug={menu.slug} />
        ))
      }
    </div>
  );
};

export default SidebarMenu;
