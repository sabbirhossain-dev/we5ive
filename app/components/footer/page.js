"use client"
import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import {  FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


import logo2 from '@/public/images/logo2.png'
import Image from 'next/image'

const page = () => {

  return (

    <>
    <section className='bg-[#1D1D1D]'>
    <div className='px-4 sm:px-5 md:px-10 lg:w-[1280px] lg:mx-auto py-6 md:py-16 text-white'>
        <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-28'>
            <div className='w-full md:w-1/2 flex flex-col gap-2'>
                <Link href="/"><Image src={logo2} alt='logo' /></Link>
                <p className='text-sm font-light tracking-wide'>Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est consectetur maxime quos fugit velit assumenda est. </p>
            </div>

            <div className='w-full md:w-1/2'>
                <div className='flex flex-col gap-2'>
                <h2 className='text-2xl font-medium'>Sign Up For Our Newsletter!</h2>
                <p className='text-sm font-light tracking-wide'>Get notified about updates and be the first to get early access to new Podcast episodes.</p>
                </div>
                <div className='mt-7 flex'>
                    <input type='email' placeholder='Your Email Address' required className='w-full text-sm py-2 bg-[white] px-3 rounded-l-md outline-none'/>
                    <button className='py-2 px-7 md:px-12 bg-[#7E53D4] rounded-r-md'>Subscribe</button>
                </div>
            </div>
        </div>


        <div className='flex flex-col md:flex-row gap-5 md:gap-20 justify-between pt-10 md:pt-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-sm font-semibold mb-1'>Contact Us</h3>
                <p className='text-sm font-light'>support@we5ive.com</p>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='text-sm font-light'>About Us</p>
                <p className='text-sm font-light'>Contact Us</p>
            </div>
            

            <div className='flex flex-col gap-2'>
                <p className='text-sm font-light'>Privacy Policy</p>
                <p className='text-sm font-light'>Terms & Condition</p>
            </div>

            <div className='flex flex-col gap-5 pr-24'>
                <h2 className='flex flex-col gap-2 text-sm font-semibold'>Social Links</h2>
                <ul className='flex gap-4'>
                    <li className='cursor-pointer hover:text-blue-700 transition-all duration-300'><FaFacebook /></li>
                    <li className='cursor-pointer hover:text-blue-700 transition-all duration-300'><FaXTwitter /></li>
                    <li className='cursor-pointer hover:text-blue-700 transition-all duration-300'><FaLinkedin /> </li>
                    
                </ul>
            </div>
        </div>
    </div>
      
    </section>

    <section className='bg-[#7E53D4] py-4 flex justify-center items-center text-white'>
        <p>© 2024 | Sabbir Hossain</p>
    </section>
    </>

  )
}

export default page
