'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { usePathname } from 'next/navigation';

import { FaGoogle } from 'react-icons/fa';
import { FaIdCard } from "react-icons/fa";

const Navbar = () => {

  const {data: session} = useSession();
  const profileImage = session?.user?.image
  const profileEmail = session?.user?.email

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
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
        {/* */}

        { session ? (
          <>
            <div className="relative inline-block text-left">
              <div>
                <button 
                type="button" 
                className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-sky-900 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-gray-300 hover:bg-sky-700" 
                id="menu-button" 
                aria-expanded="true" 
                aria-haspopup="true"
                onClick={() => setIsProfileMenuOpen((prev) => !prev )}>
                  <FaIdCard className='text-white' size='25px'/>
                  <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              { isProfileMenuOpen && 
                  /* <!--
                  Dropdown menu, show/hide based on menu state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                --> */
                <div className="absolute right-0 z-10 mt-2 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                  <div className="py-1" role="none">
                      {/* <!-- Active: "bg-gray-100 text-gray-900 outline-none", Not Active: "text-gray-700" --> */}
                    <h6 className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Signed in as 
                      <p className='font-bold text-gray-700'>{profileEmail}</p>
                    </h6>
                    {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Duplicate</a> */}
                  </div>
                  <div className="py-1" role="none">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-4">Share</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-5">Add to favorites</a>
                  </div>
                  <div className="py-1" role="none">
                    <a 
                    className="block px-4 py-2 text-sm text-gray-700" 
                    role="menuitem" 
                    tabIndex="-1" 
                    id="menu-item-6" 
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      signOut();
                    }}>Sign out</a>
                  </div>
                </div>
              }
            </div>
          </>
          ) : (
          <div
            className='relative flex h-max px-4 py-2 mx-12 items-center self-center rounded-lg bg-sky-900'>
              <FaGoogle className='text-white mr-2'/>
              {providers && Object.values(providers).map((provider, index) => (
                <button 
                  className='text-white' 
                  key={index}
                  onClick={() => signIn(provider.id)}>Login or Register</button>
              ))}
          </div> 
          )
        }
      </div>
    </nav>
  );
}

export default Navbar;