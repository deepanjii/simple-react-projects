import { createContext } from 'react';
import { SidebarContextValue } from '../components/Sidebar/types';

const defaultValue: SidebarContextValue = {
  activeMenu: '',
  menus: [],
  onMenuChange: () => {}
}

const SidebarMenuContext = createContext<SidebarContextValue>(defaultValue);

export { SidebarMenuContext };
