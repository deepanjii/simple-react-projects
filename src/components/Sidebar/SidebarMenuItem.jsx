import { Link } from 'react-router-dom';
import React from 'react';
import useSidebar from '../../hooks/useSidebar';
import type { SidebarContextValue } from './types';

type SidebarMenuItemProps = {
  name: string,
  slug: string
};

const SidebarMenuItem = React.memo(({ name, slug }: SidebarMenuItemProps) => {
  const { activeMenu, onMenuChange }: SidebarContextValue = useSidebar();
  const handleMenuClick = () => onMenuChange(name);

  return (
    <Link
      className={`sidebar__menu__item ${name === activeMenu ? 'active' : ''}`}
      onClick={handleMenuClick}
      to={slug}
    >
      {name}
    </Link>
  );
});

export default SidebarMenuItem;
