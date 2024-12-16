import React from 'react'
import Navbar from '@/components/Navbar'
import AuthProvider from '@/components/AuthProvider'

import '@/assets/styles/globals.css'
export const metadata = {
  title: 'Purchases and Savings',
  description: ''
}

const MainLayout = ({children}) => {
  return (
    <AuthProvider>
      <html lang='en' className='bg-gray-900'>
        <body>
          <Navbar />
          <div>{children}</div>
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout