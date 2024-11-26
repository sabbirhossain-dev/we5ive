import Image from 'next/image'
import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong} from 'react-icons/fa6'
import shopImg from '@/public/images/shopImg.png'
import shopImg2 from '@/public/images/shopImg2.png'
import shopImg3 from '@/public/images/shopImg3.png'
import shopImg4 from '@/public/images/shopImg4.png'
import shopImg5 from '@/public/images/shopImg5.png'
import productImg1 from '@/public/images/productImg1.png'
import productImg2 from '@/public/images/productImg2.png'
import productImg3 from '@/public/images/productImg3.png'
import productImg4 from '@/public/images/productImg4.png'

import { FaStar,FaRegStar } from 'react-icons/fa'
import { FiPlus , FiMinus} from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import FeatureCard from '../components/FeatureCard'
import SeeMoreButton from '../components/SeeMoreButton'
import Title from '../components/Title'
import ReviewSection from '../components/ReviewSection'

const page = () => {
  return (
    <>
    <section className='bg-[#dce9e4] pt-16 pb-5 md:py-10'>
      <div className='px-4 sm:px-5 md:px-10 lg:w-[1280px] lg:mx-auto py-6 md:py-8'>
      <div className='flex flex-col md:flex-row gap-10'>

      {/* left part */}
        <div className='w-full md:w-1/2'>
         {/* <ul className='flex justify-between' >
            
            <li className='flex justify-center
               items-center border border-[#7E53D4] text-[#7E53D4] rounded-full p-1 cursor-pointer'><FaArrowLeftLong size={24}/></li>
  
                <li className='flex justify-center
               items-center border border-[#7E53D4] text-[#7E53D4] rounded-full p-1 cursor-pointer'><FaArrowRightLong size={24}/></li>
            </ul> */}
          <div className='flex  items-center text-center'>
            <Image src={shopImg} alt='shopping image' className='w-full bg-[#F6F5FD] relative  rounded-md'/>
   
          </div>

          <ul className='flex gap-2 justify-between mt-3'>
            <li><Image src={shopImg2} alt='shop image' className='w-auto h-auto bg-[#F6F5FD] rounded-md' /></li>
            <li><Image src={shopImg3} alt='shop image' className='w-auto h-auto bg-[#F6F5FD] rounded-md' /></li>
            <li><Image src={shopImg4} alt='shop image' className='w-auto h-auto bg-[#F6F5FD] rounded-md' /></li>
            <li><Image src={shopImg5} alt='shop image' className='w-auto h-auto bg-[#F6F5FD] rounded-md' /></li>
            
          </ul>

        </div>


        {/* right part */}
        <div className='w-full md:w-1/2 flex flex-col'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
            <div>
            <button className='border-none px-10 py-2 bg-[#2F1C59] hover:bg-[#170a33] transition-all duration-300 rounded-md text-white text-sm'>New Arrival</button>
            </div>
            <h2 className='text-black font-semibold text-xl'>White Hoodie</h2>
            <ul className='flex gap-1 items-center'>
                    <li className=''><FaStar className='text-yellow-400'/></li>
                    <li className=''><FaStar className='text-yellow-400'/></li>
                    <li className=''><FaStar className='text-yellow-400'/></li>
                    <li className=''><FaStar className='text-yellow-400'/></li>
                    <li className=''><FaRegStar className='text-gray-400'/></li>
                   <li className='text-black'>(4.0)</li>
                   <li className='text-[#7E53D4] ml-1'>121 reviews</li>
                  </ul>
                  <h3 className='text-xl text-black font-normal'>BDT 2500</h3>
            </div>




{/* sizes part */}

            <div className='flex gap-10 md:gap-16 lg:gap-20 border-t-[#9690ac] border-b-[#9690ac] border-dotted border-[1px] py-7'>
              <div className='flex flex-col gap-3'>
              <h3>Available Size</h3>
              <ul className='flex gap-2'>
                <li><button className=' px-4 py-2 bg-gray-200 rounded-md border border-[#7E53D4]'>S</button></li>
                <li><button className='border-none px-4 py-2 bg-gray-200 rounded-md'>M</button></li>
                <li><button className='border-none px-4 py-2 bg-gray-200 rounded-md'>L</button></li>
                <li><button className='border-none px-4 py-2 bg-gray-200 rounded-md'>XL</button></li>
                
              </ul>
              </div>

              <div className='flex flex-col gap-3'>
              <h3>Available Color</h3>
              <ul className='flex gap-2 items-center justify-center'>
                <li className='w-6 h-6 bg-gray-100 rounded-full border border-[#7E53D4]'></li>
                <li className='text-sm'>Off White</li>
                <li className='w-4 h-4  bg-black rounded-full '></li>
              </ul>
              </div>
            </div>

{/* quantity part */}

            <div className='flex flex-col gap-4'>
            <p className='text-base font-semibold'>Quantity</p>
                <ul className='flex justify-between items-center gap-4 bg-gray-300 rounded-3xl px-4 py-3 w-32'>
                  <li className='cursor-pointer'><FiMinus /></li>
                  <li>1</li>
                  <li className='cursor-pointer'><FiPlus /></li>
                </ul>
            </div>

            <div className='flex flex-col sm:flex-row justify-between items-center gap-6 py-3'>
              <button className='w-full h-auto border-[#7E53D4] border outline-none py-1 text-[#7E53D4] hover:text-white hover:bg-[#7E53D4] transition-all duration-300 rounded-lg'>Buy Now</button>
              <button className='w-full h-auto border-[#7E53D4] border outline-none py-1 text-[#7E53D4] hover:text-white hover:bg-[#7E53D4] transition-all duration-300 rounded-lg'>Add to Cart</button>
            </div>

            </div>
        </div>
      </div>
      </div>

      {/* cart part */}
      <div className='hidden md:flex w-24 h-auto bg-[#581FC1] lg:flex flex-col justify-center items-center text-white rounded-l-xl py-4 px-2 absolute md:top-60 top-72 right-0 z-50'>
        <p><IoBagOutline /></p>
        <p className='text-base'>Your Bag</p>
        <p>0</p>
      </div>
      </section>



{/* review section */}

<section className='bg-[#dce9e4]'>
      <div className='px-4 sm:px-5 md:px-10 lg:w-[1280px] lg:mx-auto py-12'>

  <ReviewSection />
      </div>
</section>






      {/* related products */}

      <section className='bg-[#dce9e4]'>
      <div className='px-4 sm:px-5 md:px-10 lg:w-[1280px] lg:mx-auto py-12'>
            <div className="flex justify-between items-center">
            <div className='flex'>
              <Title className='flex flex-col gap-10 mb-6' text2='Related Products' />
            </div>
            <ul className='flex gap-3'>
            
            <li className='flex justify-center
               items-center border border-[#7E53D4] text-[#7E53D4] rounded-full p-2 cursor-pointer'><FaArrowLeftLong size={24}/></li>
  
                <li className='flex justify-center
               items-center border border-[#7E53D4] text-[#7E53D4] rounded-full p-2 cursor-pointer'><FaArrowRightLong size={24}/></li>
            </ul>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
                
                <FeatureCard image={productImg1} name='Indian Sharee' price='BDT 2,300' />

                <FeatureCard image={productImg2} name='Hoodie' price='BDT 2,300' />

                <FeatureCard image={productImg3} name='Plazu' price='BDT 2,300' />

                <FeatureCard image={productImg4} name='Jacket' price='BDT 2,300' />


            </div>
                <div className='flex justify-center items-center py-6'>
                  <SeeMoreButton />
                </div>
      </div>
      </section>
</>

  )
}

export default page
