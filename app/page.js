import React from 'react'
import Image from 'next/image'
import { Manrope, Pacifico } from "next/font/google";
import { FaArrowLeftLong,FaArrowRightLong } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiExchangeFundsLine } from "react-icons/ri";



import heroImg from '@/public/images/hero.png'
import truckIcon from '@/public/images/truckicon.png'
import exchangeIcon from '@/public/images/exchangeicon.png'
import moneyIcon from '@/public/images/moneyicon.png'
import Button from './components/button';
import Title from './components/Title';
import productImg1 from '@/public/images/productImg1.png'
import productImg2 from '@/public/images/productImg2.png'
import productImg3 from '@/public/images/productImg3.png'
import productImg4 from '@/public/images/productImg4.png'
import offerImg from '@/public/images/offerImg.png'
import collectionImg from '@/public/images/collectionImg.png'
import summerImg1 from '@/public/images/summerImg1.png'
import summerImg2 from '@/public/images/summerImg2.png'
import summerImg3 from '@/public/images/summerImg3.png'
import summerImg4 from '@/public/images/summerImg4.png'

import AddButton from './components/AddButton';
import SeeMoreButton from './components/SeeMoreButton';
import Card from './components/Card';
import FeatureCard from './components/FeatureCard';


const manrope = Manrope({
  subsets: ['latin'],
})

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400'
})


const page = () => {
  return (
    <>
    {/* Hero section */}
      <section className={`${manrope.className}`}>
        <div className='h-[300px] md:h-[400px] lg:h-[500px] flex justify-center items-center relative'>
          <Image src={heroImg} alt='hero image' className='w-full h-full'/>
          <div className='flex flex-col justify-center items-center gap-3 absolute text-center'>
            <h1 className='text-4xl md:text-5xl font-semibold text-[#F4F8FF]'>Elevate Your Everyday Style</h1>
            <p className='text-sm tracking-wider md:text-base font-normal text-[#F5F3FF] md:tracking-widest'>Discover the Latest Trends in Sustainable Fashion</p>
            <Button />
          </div>
        </div>


        {/* Hero section bottom */}
        <div className='bg-gradient-to-r from-purple-700 to-purple-900 w-full h-auto'>
          <div className='px-4 sm:px-5 md:px-10 lg:w-[1280px] lg:mx-auto flex flex-col md:flex-row gap-10  text-white py-6'>
              <div className='flex gap-3 px-1'>
                <div>
                  <Image src={truckIcon} alt='truck icon' />
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className='text-xl font-medium tracking-wider'>FREE SHIPPING</h3>
                  <p className='text-sm font-light'>BUY BDT 3000+ & GET FREE DELIVERY</p>
                </div>
              </div>

              <div className='flex gap-3 px-1'>
                <div>
                  <Image src={exchangeIcon} alt='exchange icon' />
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className='text-xl font-medium tracking-wider'>7 DAYS EXCHANGE</h3>
                  <p className='text-sm font-light'>EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS</p>
                </div>
              </div>

              <div className='flex gap-3 px-1'>
                <div>
                  <Image src={moneyIcon} alt='money icon'/>
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className='text-xl font-medium tracking-wider'>100% PAYMENT SECURE</h3>
                  <p className='text-sm font-light'>CASH ON DELIVERY AND SECURED ONLINE PAYMENT</p>
                </div>
              </div>
              
          </div>
        </div>
      </section>



{/* Featured products */}

      <section className='bg-[#dce9e4]'>
      <div className='px-4 sm:px-5 md:px-10 lg:w-[1280px] lg:mx-auto py-12'>
            <div className="flex justify-between items-center">
            <div className='flex'>
              <Title className='flex flex-col gap-10 mb-6' text1='FEATURED PRODUCT' text2='New Arrivals' />
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




      {/* big deal section */}
      <section className='bg-[#dce9e4]'>
      <div className='px-4 sm:px-5 md:px-10 lg:w-[1280px] lg:mx-auto py-6 md:py-16'>
            
      <div className='bg-[#EEECFB]'>
      <div className='flex flex-col md:flex-row md:items-center gap-10 md:gap-24 px-3 md:px-10'>
          <div className='flex flex-col gap-5 py-10 md:py-20 px-2 md:px-8'>
            <p className={`${pacifico.className} text-[#6F42C1] text-xl`}>Big Deal</p>
            <h2 className='text-2xl md:text-4xl font-medium '><span className='text-[#6F42C1]'>30%</span> Off for New Customers</h2>
            <Button />
          </div>

          <div className='flex justify-center items-center pt-3'>
            <Image src={offerImg} alt='offer image'/>
          </div>
        </div>
      </div>
      </div>
      </section>



      {/* collection section */}

      <section className='bg-[#dce9e4] pt-16 pb-5 md:py-10'>
      <div className='px-4 sm:px-5 md:px-10 lg:w-[1280px] lg:mx-auto py-6 md:py-8'>
      <div className='flex flex-col md:flex-row gap-10 relative'>
        <div className='bg-[#EEECFB] h-[300px] md:h-[480px] w-full md:w-1/2 flex justify-center items-center '>
          <Image src={collectionImg} alt='collection image' className='absolute top-[-90px] md:top-[-100px] md:bottom-0  h-[390px] md:h-[580px]'/>
        </div>
        <div className='flex flex-col justify-center gap-3'>
          <h1 className='text-[#1D1D1D] font-medium text-4xl uppercase tracking-wider'>Men Collection</h1>
          <Button />
        </div>
      </div>

      </div>
      </section>





{/* summer section */}

      <section className='bg-[#dce9e4] pt-28 pb-10 md:pb-b md:pt-0'>
        <div className='px-4 sm:px-5 md:px-10 lg:w-[1280px] lg:mx-auto py-6'>
        <div className='flex justify-between items-center mb-6'>
          <Title text1='SUMMER' text2='Big Deal' />
          <ul className='flex gap-3'>
            
          <li className='flex justify-center
             items-center border border-[#7E53D4] text-[#7E53D4] rounded-full p-2 cursor-pointer'><FaArrowLeftLong size={24}/></li>

              <li className='flex justify-center
             items-center border border-[#7E53D4] text-[#7E53D4] rounded-full p-2 cursor-pointer'><FaArrowRightLong size={24}/></li>
          </ul>
        </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <Card image={summerImg1} name='Indian Sharee' price='BDT 2,300' />
              <Card image={summerImg2} name='Half Sleeve Shirt' price='BDT 2,300' />
              <Card image={summerImg3} name='Woman wearing sari' price='BDT 2,300' />
              <Card image={summerImg4} name='Checkered shirt' price='BDT 2,300' />
              <Card image={summerImg1} name='Indian Sharee' price='BDT 2,300' />
              <Card image={summerImg2} name='Half Sleeve Shirt' price='BDT 2,300' />
              <Card image={summerImg3} name='Woman wearing sari' price='BDT 2,300' />
              <Card image={summerImg4} name='Checkered shirt' price='BDT 2,300' />
          </div>
          <div className='flex justify-center items-center pt-6'>
          <SeeMoreButton />
          </div>
        </div>
      </section>

      
    </>
  )
}



export default page

