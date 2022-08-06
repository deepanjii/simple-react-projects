import SidebarMenuContext from '../contexts/SidebarMenuContext';
import { useContext } from 'react';

export default function useSidebar() {
  const context = useContext(SidebarMenuContext);
  if (typeof context === 'undefined') {
    throw new Error('useSidebar must be used within SidebarProvider');
  } else {
    return context;
  }
}