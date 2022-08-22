/* @flow */
import { Link } from 'react-router-dom';
import React from 'react';
import type { Node } from 'react';
import useSidebar from '../../hooks/useSidebar';
import type { SidebarContextValue } from './types';

type SidebarMenuItemProps = {
  icon: string,
  name: string,
  slug: string
};

const SidebarMenuItem = React.memo(({ icon, name, slug }: SidebarMenuItemProps): Node => {
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
