import { MdNotificationsNone } from 'react-icons/md'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import Logo from '../logo'

const Header = () => {
  return (
    <header className='h-12 w-full px-6 py-2 flex items-center justify-between dark:bg-primary bg-white'>
      <Logo />
      <div className='flex items-center gap-x-8'>
      <MdNotificationsNone className='text-[#212323] dark:text-white' size={24}  />
      <Avatar className='w-8 h-8' >
  <AvatarImage  src="/temp/user.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
      </div>
    </header>
  )
}

export default Header