import { Link } from 'react-router-dom';
import React, { memo } from 'react';
import useSidebar from '../../hooks/useSidebar';
import type { SidebarContextValue } from './types';

type SidebarMenuItemProps = {
  icon: string,
  name: string,
  slug: string
};

const SidebarMenuItem = memo(({ icon, name, slug }: SidebarMenuItemProps): JSX.Element => {
  const { activeMenu, onMenuChange }: SidebarContextValue = useSidebar();
  const handleMenuClick = () => onMenuChange(name);

  return (
    <Link
      className={`sidebar__menu__item ${name === activeMenu ? 'active' : ''}`}
      onClick={handleMenuClick}
      to={slug}
    >
      <span className='material-symbols-rounded'>{icon}</span>
      <span>{name}</span>
    </Link>
  );
});

export default SidebarMenuItem;
