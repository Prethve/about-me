'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {

  const pathname = usePathname()  
  console.log(pathname)
  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl py-3'>
        <div className='flex space-x-4'>
          <Link 
            className={pathname === '/' ? 
              ('rounded-md px-3 py-3 text-sm font-medium bg-black text-white hover:bg-gray-900 hover:text-white') :
              ('rounded-md px-3 py-3 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white')}
            href='/'>Home
          </Link>
          <Link 
            className={pathname === '/projects' ? 
              ('rounded-md px-3 py-3 text-sm font-medium bg-black text-white hover:bg-gray-900 hover:text-white') :
              ('rounded-md px-3 py-3 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white')}
            href='/projects'>Projects
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar