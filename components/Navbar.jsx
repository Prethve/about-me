'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGoogle } from 'react-icons/fa'

const Navbar = () => {

  const pathname = usePathname()  
  console.log(pathname)
  return (
    <nav className='rounded-lg bg-gray-800'>
      <div className='flex mx-auto py-3 max-w-6xl justify-between'>
        <div className='mx-12 self-center'>
          <Link 
            className={pathname === '/' ? 
              ('rounded-md px-5 py-3 text-sm font-medium bg-black text-white hover:bg-gray-900 hover:text-white') :
              ('rounded-md px-5 py-3 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white')}
            href='/'>Home
          </Link>
          <Link 
            className={pathname === '/purchases' ? 
              ('rounded-md px-5 py-3 text-sm font-medium bg-black text-white hover:bg-gray-900 hover:text-white') :
              ('rounded-md px-5 py-3 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white')}
            href='/purchases'>Expenditure
          </Link>
          <Link 
            className={pathname === '/savings' ? 
              ('rounded-md px-5 py-3 text-sm font-medium bg-black text-white hover:bg-gray-900 hover:text-white') :
              ('rounded-md px-5 py-3 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white')}
            href='/savings'>Savings
          </Link>
        </div>
        <div className='flex h-max px-4 py-2 mx-12 items-center self-center rounded-lg bg-sky-900'>
          <FaGoogle className='text-white mr-2'/>
          <button className='text-white'>Login or Register</button>
        </div>
        {/* <button className='h-max px-5 rounded-md items-center text-sm font-medium bg-black hover:bg-gray-900 hover:text-white'>
           
        </button> */}
      </div>
    </nav>
  )
}

export default Navbar