import React from 'react'
import Link from 'next/link'
const SeeMoreButton = () => {
  return (
    <div className='text-center'>
        <button className='border border-[#7E53D4]  text-base py-2 px-4 flex justify-center items-center rounded-md text-center font-medium bg-[#7E53D4] text-white hover:bg-[#552da7] transition duration-300'>
        <Link href='/'>See More</Link>
        </button>
        
    </div>
  )
}

export default SeeMoreButton
