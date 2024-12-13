import React from 'react'
import Navbar from '@/components/Navbar'

import '@/assets/styles/globals.css'
export const metadata = {
  title: 'Purchases and Savings',
  description: ''
}

const MainLayout = ({children}) => {
  return (
    <html lang='en' className='bg-gray-900'>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  )
}

export default MainLayout