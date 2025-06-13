import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import facegenie_logo from '@/assets/facegenie_logo.png'
import resoluteai_logo from '@/assets/resoluteai_logo.webp'
import { Link, useLocation } from "react-router"
import { Home } from 'lucide-react'
import { Settings } from 'lucide-react'
import { LayoutDashboard } from 'lucide-react'


const sidebarMenu = [{ path: '/', icon: <Home />, label: 'Home' }, { path: '/configaration', icon: <Settings />, label: 'Configaration' }, { path: '/dashboard', icon: <LayoutDashboard />, label: 'Dashboard' }]

const AppSidebar = () => {
  const location = useLocation()
  return (
    <Sidebar className="border-r-4 border-[#F92609]">
      <SidebarHeader>
        <img src={facegenie_logo} alt="FaceGenie logo" />
      </SidebarHeader>

      <SidebarContent className="px-3 py-2">
        <SidebarMenu>
          {sidebarMenu.map((menu) => {
            // Use startsWith to match nested paths like /analysis/details
            const isActive =
              menu.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(menu.path);

            return (
              <SidebarMenuItem key={menu.label}>
                <SidebarMenuButton className="hover:bg-[#F92609] hover:text-accent" asChild>
                  <Link
                    to={menu.path}
                    className={`cursor-pointer flex items-center  gap-2 px-2 py-1 rounded-md transition-all duration-200 ${isActive ? "text-[#F92609] font-semibold bg-red-100" : "text-gray-700"
                      }`}
                  >
                    {menu.icon}
                    <span>{menu.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <img src={resoluteai_logo} alt="ResoluteAI logo" />
      </SidebarFooter>
    </Sidebar>
  )
}
export default AppSidebar