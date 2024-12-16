'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa';

const Navbar = () => {

  const {data: session} = useSession();

  const [providers, setProviders] = useState(null);
  const pathname = usePathname();
  
  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    }

    setAuthProviders();
  }, [])
  
  // console.log(providers)
  return (
    <nav className='rounded-lg bg-gray-800'>
      <div className='flex mx-auto py-3 max-w-6xl justify-between'>
        <div className='mx-12 self-center'>
          <Link 
            className={pathname === '/' ? 
              ('rounded-md px-5 py-3 m-1 text-sm font-medium bg-black text-white hover:bg-gray-900 hover:text-white') :
              ('rounded-md px-5 py-3 m-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white')}
            href='/'>Home
          </Link>

          {session ? (
          <>
            <Link 
              className={pathname === '/purchases' ? 
                ('rounded-md px-5 py-3 m-1 text-sm font-medium bg-black text-white hover:bg-gray-900 hover:text-white') :
                ('rounded-md px-5 py-3 m-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white')}
              href='/purchases'>Expenditure
            </Link>
            <Link 
              className={pathname === '/savings' ? 
                ('rounded-md px-5 py-3 m-1 text-sm font-medium bg-black text-white hover:bg-gray-900 hover:text-white') :
                ('rounded-md px-5 py-3 m-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white')}
              href='/savings'>Savings
            </Link>
          </>
          ) : (<></>)}
          
        </div>
        <div className='flex h-max px-4 py-2 mx-12 items-center self-center rounded-lg bg-sky-900'>
          <FaGoogle className='text-white mr-2'/>
          {providers && Object.values(providers).map((provider, index) => (
            <button 
              className='text-white' 
              key={index}
              onClick={() => signIn(provider.id)}>Login or Register</button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;