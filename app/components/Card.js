import Image from 'next/image'
import React from 'react'
import { FaStar,FaRegStar } from 'react-icons/fa';

import AddButton from './AddButton'

const Card = ({name, image, id, price}) => {
  return (
    <div className='flex flex-col gap-4 bg-white p-3 rounded-lg'>
                  <div className='bg-[#ebeaf0] rounded-lg h-[250px] relative overflow-hidden '><Image className='h-full hover:scale-110 transition ease-in-out duration-300' src={image} alt='product image'/><p className='bg-[#7E53D4] w-14 h-auto text-white text-center absolute top-0 right-4 px-4 py-2 rounded-b-full'>Up to 40%</p></div>
                  <ul className='flex gap-2'>
                    <li className=''><FaStar className='text-yellow-400'/></li>
                    <li className=''><FaStar className='text-yellow-400'/></li>
                    <li className=''><FaStar className='text-yellow-400'/></li>
                    <li className=''><FaRegStar className='text-yellow-400'/></li>
                    <li className=''><FaRegStar className='text-yellow-400'/></li>
                  </ul>
                  <div className='flex justify-between text-[#1D1D1D]'>
                    <h3 className='text-base font-normal'>{name}</h3>
                    <h2 className='text-md font-semibold'>{price}</h2>
                  </div>
                  <AddButton />
                </div>
  )
}

export default Card
