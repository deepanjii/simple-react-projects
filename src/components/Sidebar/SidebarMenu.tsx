import type { SidebarContextValue } from './types';
import SidebarMenuItem from './SidebarMenuItem';
import useSidebar from '../../hooks/useSidebar';

const SidebarMenu = (): JSX.Element => {
  const { menus }: SidebarContextValue = useSidebar();
  return (
    <div className="sidebar__menu">
      {
        menus.map(menu => (
          <SidebarMenuItem key={menu.name} icon={menu.icon} name={menu.name} slug={menu.slug} />
        ))
      }
    </div>
  );
};

export default SidebarMenu;
