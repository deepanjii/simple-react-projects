import React, {
  useMemo
} from 'react';
import { SidebarMenuContext } from '../../contexts/SidebarMenuContext';
import type { SidebarMenus, SidebarContextValue } from './types';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const sidebarMenus: SidebarMenus = [
  {
    slug: '/',
    name: 'Home',
    icon: 'home'
  },
  {
    slug: '/projects',
    name: 'Projects',
    icon: 'widgets'
  },
  {
    slug: '/skills',
    name: 'Skills',
    icon: 'tips_and_updates'
  },
  {
    slug: '/achievements',
    name: 'Achievements',
    icon: 'workspace_premium'
  }
];

type Props = {
  children: JSX.Element
};

const SidebarProvider = ({ children }: Props): JSX.Element => {
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
