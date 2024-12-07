import React from 'react'
import Navbar from '@/components/Navbar'

import '@/assets/styles/globals.css'
export const metadata = {
  title: 'Prethve Deev | Get to Know Me!',
  description: ''
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  )
}

export default MainLayout