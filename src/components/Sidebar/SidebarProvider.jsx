import React, {
  useEffect,
  useCallback,
  useMemo,
  useReducer
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

type SidebarState = {
  activeMenu: string
};

type SidebarAction = {
  type: string,
  payload?: string
};

const SWITCH_MENU = 'SWITCH_MENU';

const sidebarReducer = (state: SidebarState, action: SidebarAction) => {
  switch (action.type) {
    case SWITCH_MENU: return { ...state, activeMenu: action.payload };
    default: return state;
  }
};

const initialState: SidebarState = { activeMenu: sidebarMenus[0].name };

const SidebarProvider = ({ children }: Props) => {
  const [sidebarState, setSidebarState] = useLocalStorage('menu', initialState);
  const [
    { activeMenu },
    dispatch
  ]: [SidebarState, Function] = useReducer(sidebarReducer, sidebarState);

  useEffect(() => {
    setSidebarState({ activeMenu });
  }, [activeMenu]);

  const onMenuChange = useCallback((menu: string) => {
    dispatch({ type: SWITCH_MENU, payload: menu });
  });

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
