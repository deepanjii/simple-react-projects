export type SidebarMenu = {
  icon: string,
  name: string,
  slug: string
};

export type SidebarMenus = Array<SidebarMenu>;

export type SidebarContextValue = {
  activeMenu: string,
  menus: SidebarMenus,
  onMenuChange: Function
};
