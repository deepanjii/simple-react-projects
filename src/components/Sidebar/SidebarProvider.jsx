import React, {
  useMemo
} from 'react';
import SidebarMenuContext from '../../contexts/SidebarMenuContext';
import type { SidebarMenus, SidebarContextValue } from './types';
import useLocalStorage from '../../hooks/useLocalStorage';

const sidebarMenus: SidebarMenus = [
  {
    slug: '/',
    name: 'Home'
  },
  {
    slug: '/projects',
    name: 'Projects'
  },
  {
    slug: '/skills',
    name: 'Skills'
  },
  {
    slug: '/achievements',
    name: 'Achievements'
  }
];

type Props = {
  children: any
};

const SidebarProvider = ({ children }: Props) => {
  const [activeMenu, setActiveMenu] = useLocalStorage('menu', sidebarMenus[0].name);

  const onMenuChange = (menu: string) => {
    setActiveMenu(menu);
  };

  const value: SidebarContextValue = useMemo(() => ({
    activeMenu,
    menus: sidebarMenus,
    onMenuChange
  }), [activeMenu]);

  return (
    <SidebarMenuContext.Provider value={value}>{children}</SidebarMenuContext.Provider>
  );
};

export default SidebarProvider;
