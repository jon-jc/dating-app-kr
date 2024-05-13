import { BellIcon, HeartPulseIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-950 px-4 md:px-6 py-4 flex items-center justify-between shadow-sm dark:shadow-none">
    <Link className="flex items-center gap-2" href="/">
      <HeartPulseIcon className="w-6 h-6 text-primary" />
      <span className="text-lg font-semibold">Exclusive</span>
    </Link>
    <div className="flex items-center gap-4">
      <Link href="/profile">
      <Button className="rounded-full" size="icon" variant="ghost">
        <BellIcon className="w-5 h-5" />
      </Button>
      <Avatar >
        <AvatarImage alt="@user" src="/placeholder-user.jpg" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      </Link>
    </div>
  </header>
  )
}

export default Header