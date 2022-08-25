export interface SidebarMenu {
  icon: string;
  name: string;
  slug: string;
}

export type SidebarMenus = Array<SidebarMenu>;

export interface SidebarContextValue {
  activeMenu: string;
  menus: SidebarMenus;
  onMenuChange: (name: string) => void;
}
