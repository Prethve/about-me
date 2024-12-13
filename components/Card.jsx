import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({image, title, desc}) => {

  return (
	<section className='max-w-xl mx-auto'>
		<div className='p-4 rounded-xl bg-sky-950 border border-gray-500'>
			<div className='pb-4 pr-2 text-xl font-medium text-white'>
				Track your {title}
			</div>
			<div className='grid grid-cols-3 grid-rows-2 gap-4 justify-items-center'>
				<Image 
					className='col-span-2 row-span-2 rounded-xl'
					src={image}
					width=''
					height=''
					alt=''
				/>
				<p className='text-gray-400'>
					{desc}
				</p>
				<Link 
					className='w-max p-4 rounded-lg bg-sky-900 self-center text-xl font-medium text-white'
					href={ title === 'Expenses' ? ('/purchases') : ('/savings')}>
					{title}
				</Link>
			</div>

		</div>
	</section>
  )
}

export default Card