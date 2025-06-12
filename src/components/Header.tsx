import { SidebarTrigger } from './ui/sidebar'
import gokaldas_logo from '@/assets/gokaldas_exports_ltd_logo.avif'

const Header = () => {
  return (
    <div className='flex justify-between  border-b border-[#F92609]'>
      <SidebarTrigger className='text-[#F92609]' />
      <h1 className='text-[#F92609] font-semibold text-xl sm:text-1xl md:text-2xl py-5'>
        Fabric Analyzer
      </h1>
      <img
        src={gokaldas_logo}
        alt="Gokaldas Exports Logo"
        className="hidden md:block h-[80px] w-auto object-contain"
      />
      <img
        src={gokaldas_logo}
        alt="Gokaldas Mobile Logo"
        className="block md:hidden h-[70px] w-auto object-contain"
      />
    </div>
  )
}
export default Header
