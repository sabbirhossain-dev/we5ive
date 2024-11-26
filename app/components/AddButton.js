import Link from 'next/link'
import React from 'react'

const AddButton = () => {
  return (
    <div>
        <button className='border border-[#7E53D4] text-[#7E53D4] text-base py-2 w-full flex justify-center items-center rounded-md text-center font-semibold hover:bg-[#7E53D4] transition-colors duration-300 hover:text-white'>
        <Link href='/'>Add to Cart</Link>
        </button>
        
    </div>
  )
}

export default AddButton
