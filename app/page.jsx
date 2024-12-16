import React from 'react'
import Card from '@/components/Card'

import v1 from '@/images/v1.png' 
import v2 from '@/images/v2.png' 
import v3 from '@/images/v3.png' 

const HomePage = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='pt-60 pb-5 text-center text-white text-7xl '>
        Welcome Back!
      </div>
      <div className='pt-10 pb-20 text-center text-white text-xl font-medium'>
        Fetch the username from database
      </div>
      <div className='flex justify-center'>
        <Card image={v1} title='Expenses' desc='Expenditure trends, key spending factors'/>
        <Card image={v2} title='Savings' desc='Monthly savings, key saving factors'/>
      </div>
    </div>
  )
}

export default HomePage