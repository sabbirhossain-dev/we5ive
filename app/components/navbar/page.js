"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import { Manrope } from "next/font/google";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import logo from '@/public/images/logo.png'
import menubar from '@/public/images/menubar.png'


const manrope = Manrope({
    subsets: ['latin'],
    weight: '600',
  })

const page = () => {

    const [toggle, setToggle] = useState(false)

    const pathname = usePathname();

  return (
    <>
     <div className='w-full mx-auto bg-[#F5F3FF] relative'>

{/* toggle menubar */}
     <div onClick={()=>{setToggle(!toggle)}} className='w-10 md:hidden absolute top-[28px] left-3'>
      {toggle ? <RxCross1 size={26}/> :<Image src={menubar} alt='menu bar'  className=' w-8 h-6 md:hidden'/>}
     </div>

     {toggle && 
          <ul
            className={`${manrope.className} flex flex-col bg-[#F5F3FF] gap-8 text-[#646464] absolute top-20 left-0 w-2/3 py-7 px-8 z-50`}>
            <li onClick={()=>{setToggle(false)}} className={`link ${pathname === "/"? 'text-[#581FC1]' : ''} text-[16px] hover:text-[#581FC1] transition-colors duration-300`}><Link href='/'>Home</Link></li>

            <li onClick={()=>{setToggle(false)}} className={`link ${pathname === "/shop" ? 'text-[#581FC1]' : ''} text-[16px] hover:text-[#581FC1] transition-colors duration-300`}><Link href='/shop'>Shop</Link></li>

            <li onClick={()=>{setToggle(false)}} className={`link ${pathname === "/deals" ? 'text-[#581FC1]' : ''} text-[16px] hover:text-[#581FC1] transition-colors duration-300`}><Link href='/deals'>Deals</Link></li>

            <li onClick={()=>{setToggle(false)}} className={`link ${pathname === "/whatsnew" ? 'text-[#581FC1]' : ''} text-[16px] hover:text-[#581FC1] transition-colors duration-300`}><Link href="/whatsnew">What'sNew</Link></li>
         </ul>}


{/* nav logo */}
     <nav className='flex justify-between items-center px-4 sm:px-5 md:px-10 lg:w-[1280px] lg:mx-auto  h-10 py-10 ml-9'>

      <div className='w-[110px] h-[25px] md:w-[160px] md:h-[40px] '>
        <Link href='/'><Image src={logo} alt='logo image' width="auto" height="auto" priority/></Link>
      </div>

      {/* nav items */}
      <div className='hidden md:block'>
        <ul className={`${manrope.className} flex gap-8 text-[#646464]`}>
            <li className={`link ${pathname === "/"? 'text-[#581FC1]' : ''} text-[16px] hover:text-[#581FC1] transition-colors duration-300`}><Link href='/'>Home</Link></li>

            <li className={`link ${pathname === "/shop" ? 'text-[#581FC1]' : ''} text-[16px] hover:text-[#581FC1] transition-colors duration-300`}><Link href='/shop'>Shop</Link></li>

            <li className={`link ${pathname === "/deals" ? 'text-[#581FC1]' : ''} text-[16px] hover:text-[#581FC1] transition-colors duration-300`}><Link href='/deals'>Deals</Link></li>

            <li className={`link ${pathname === "/whatsnew" ? 'text-[#581FC1]' : ''} text-[16px] hover:text-[#581FC1] transition-colors duration-300`}><Link href="/whatsnew">What'sNew</Link></li>
        </ul>
      </div>


      {/* nav right side */}
      <div>
        <ul className='flex gap-5 justify-center items-center'>
            <li className='hidden lg:block '>
            <div className='flex gap-2 items-center relative'>
            <CiSearch  size={20} className='absolute left-1 top-[6px] cursor-pointer'/>
            <input type='text' placeholder='Search' className=' md:w-[200px] lg:w-[242px] pl-7 pr-2 py-1 bg-white rounded-2xl'/>
            </div>
            </li>

            <li className='cursor-pointer lg:hidden'><CiSearch size={24}/></li>

            <li className='cursor-pointer'>
                <div className='relative'><IoBagOutline size={24}/>
                    <span className='w-4 h-4 rounded-full bg-black text-white absolute -top-1 right-[-5px] flex items-center justify-center text-xs'>0</span>
                </div>
            </li>
            <li className='cursor-pointer'><FaRegUser size={24}/></li>
        </ul>
      </div>
     </nav>
     </div>
    </>
  )
}

export default page
