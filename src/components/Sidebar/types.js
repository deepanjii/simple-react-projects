export type SidebarMenu = {
  name: string,
  slug: string
};

export type SidebarMenus = Array<SidebarMenu>;

export type SidebarContextValue = {
  activeMenu: string,
  menus: Array<Object>,
  onMenuChange: Function
};
