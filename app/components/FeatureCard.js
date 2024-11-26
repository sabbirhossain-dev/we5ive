import React from 'react'
import Image from 'next/image'
import AddButton from './AddButton'

const FeatureCard = ({image, name, id, price}) => {
  return (
    <div className='flex flex-col gap-4 bg-white p-3 rounded-lg'>
                  <div className='bg-[#ebeaf0] rounded-lg h-[250px] relative overflow-hidden '><Image className='h-full hover:scale-110 transition ease-in-out duration-300' src={image} alt='product image'/></div>
                  <div className='flex justify-between text-[#1D1D1D]'>
                    <h3 className='text-base font-normal'>{name}</h3>
                    <h2 className='text-md font-semibold'>{price}</h2>
                  </div>
                  <AddButton />
                </div>
  )
}

export default FeatureCard
