import { Outlet } from 'react-router'
import AppSidebar from './AppSidebar'
import { SidebarProvider, SidebarTrigger } from './ui/sidebar'
import Header from './Header'

const MainLayout = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex w-full">
        <AppSidebar />
        <div className="flex flex-col w-full ">
          <Header />
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  )
}

export default MainLayout
