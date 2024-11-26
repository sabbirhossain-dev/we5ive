"use client";
import Link from 'next/link'
import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";


const button = () => {
  return (
    <div className='flex items-center  group'>
      <button className='border-none bg-[#8F71E1] group-hover:bg-[#6439da] duration-300 px-3 md:px-6 py-1 md:py-2 rounded-3xl text-[#F5F3FF] text-sm md:text-base'><Link href='/'>Shop Now</Link></button>
      <button className='border-none bg-[#8F71E1] group-hover:bg-[#6439da] duration-300 w-8 h-8 md:w-10 md:h-10 rounded-full text-[#F5F3FF] font-light'><Link href='/'><BsArrowUpRight size={20} className='inline-flex group-hover:rotate-45 transition duration-300'/></Link></button>
    </div>
  )
}

export default button
