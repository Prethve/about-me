import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaLongArrowAltRight } from "react-icons/fa";

const Card = ({image, title, desc}) => {

  return (
	<section className='relative max-w-lg mx-auto'>
		<div className='p-4 rounded-xl bg-sky-950 border border-gray-500'>
			<div className='pb-4 pr-2 text-xl font-medium text-white'>
				Track your {title}
			</div>
			<div className='flex grid grid-cols-3 grid-rows-2 gap-4'>
				<Image 
					className='col-span-2 row-span-2 rounded-xl'
					src={image}
					width=''
					height=''
					alt=''
				/>
				<p className='flex text-gray-400'>
					{desc}
				</p>
				<div
					className='flex p-3 items-center self-end rounded-lg bg-sky-900'>
					<FaLongArrowAltRight className='text-white mr-2'/>
					<Link
						className='font-medium text-white'
						href={ title === 'Expenses' ? ('/purchases') : ('/savings')}>
							{title}
					</Link>
				</div>
			</div>

		</div>
	</section>
  )
}

export default Card