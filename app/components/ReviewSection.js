"use client";

import Image from 'next/image';
import React, { useState } from 'react'
import { FaStar,FaRegStar } from 'react-icons/fa';
import { SlLike } from "react-icons/sl";

import reviewImg from '@/public/images/reviewImg.png'

const ReviewSection = () => {

    const [details, setDetails] = useState(false)
    const [review, setReview] = useState(true)
    const [discussion, setDiscussion] = useState(false)
  return (
    <>
      <div className=''>
            <ul className='flex gap-8 md:gap-16 lg:gap-20'>
                <li onClick={()=>{
                    setDetails(true)
                    setReview(false)
                    setDiscussion(false)
                }} className={`cursor-pointer text-base ${details ? 'text-[#7E53D4] font-semibold':'text-[#747474]'}`}> Details</li>
                <li
                onClick={()=>{
                    setDetails(false)
                    setReview(true)
                    setDiscussion(false)
                }} className={`cursor-pointer text-base ${review ? 'text-[#7E53D4] font-semibold':'text-[#747474]'}`}>Review & Rating</li>
                <li
                onClick={()=>{
                    setDetails(false)
                    setReview(false)
                    setDiscussion(true)
                }} className={`cursor-pointer text-base ${discussion ? 'text-[#7E53D4] font-semibold':'text-[#747474]'}`}>Discussion</li>
            </ul>


        {/* details part */}
          {
            details && <div className='flex flex-col gap-3 pt-10 text-[#1D1D1D]'>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literatureenaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section.
          </p>
          </div>
          }


          {/* review part */}

          {
            review && 
            <div className='flex flex-col md:flex-row gap-10 pt-10'>

            {/* left part */}
                <div className='w-full md:w-2/3 flex flex-col gap-6 '>

                 <select className='w-28 bg-transparent border border-[#7E53D4] outline-none py-3 px-3 rounded-lg'>
                    <option value='Newest'>Newest</option>
                    <option value='Oldest'>Oldest</option>
                 </select>

                    <div className=' flex flex-col gap-3'>
                    <div className='flex gap-3'>
                    <div>
                        <Image src={reviewImg} alt=''/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[16px] font-semibold'>Cameron Williamvvvson <span className='text-[13px] text-[#656565]'>3 Days</span></p>
                    <ul className='flex gap-1 items-center'>
                        <li className=''><FaStar className='text-yellow-400'/></li>
                        <li className=''><FaStar className='text-yellow-400'/></li>
                        <li className=''><FaStar className='text-yellow-400'/></li>
                        <li className=''><FaStar className='text-yellow-400'/></li>
                        <li className=''><FaRegStar className='text-gray-400'/></li>
                     </ul>
                    </div>

                    </div>
                     <p className='font-semibold text-[16px]'>Very Nice!! </p>
                     <p className='flex gap-1'><SlLike /> 10</p>
                </div>

                <hr className='border-dotted w-full border-[#CECECE]' />

                <div className=' flex flex-col gap-3'>
                    <div className='flex gap-3'>
                    <div>
                        <Image src={reviewImg} alt=''/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[16px] font-semibold'>Cameron Williamvvvson <span className='text-[13px] text-[#656565]'>3 Days</span></p>
                    <ul className='flex gap-1 items-center'>
                        <li className=''><FaStar className='text-yellow-400'/></li>
                        <li className=''><FaStar className='text-yellow-400'/></li>
                        <li className=''><FaStar className='text-yellow-400'/></li>
                        <li className=''><FaStar className='text-yellow-400'/></li>
                        <li className=''><FaRegStar className='text-gray-400'/></li>
                     </ul>
                    </div>

                    </div>
                     <p className='font-semibold text-[16px]'>Very Nice!! </p>
                     <p className='flex gap-1'><SlLike /> 10</p>
                </div>
                </div>


                <div className='flex flex-col gap-4 w-full md:w-1/3'>
                  <div className='flex gap-10'>
                    <h3 className='text-[16px] text-[#000000] font-medium '>Product Review</h3>
                    <p className='text-[16px] font-normal text-[#753ED4] '>121 reviews</p>
                  </div>

                  <div className='flex justify-between items-center'>
                  <ul className='flex gap-2 items-center'>
                        <li className=''><FaStar size={28} className='text-yellow-400'/></li>
                        <li className=''><FaStar size={28} className='text-yellow-400'/></li>
                        <li className=''><FaStar size={28} className='text-yellow-400'/></li>
                        <li className=''><FaStar size={28} className='text-yellow-400'/></li>
                        <li className=''><FaRegStar size={28} className='text-gray-400'/></li>
                     </ul>
                     <p className='text-base text-black'>(4.0)</p>
                  </div>

                  <hr className='border-dotted border-[#CECECE]'/>

                  <div className='flex flex-col gap-4'>

                    <div className='flex gap-2 justify-between items-center'>
                    <p className='text-base font-normal text-[#1D1D1D]'>5</p>
                    <div className='w-full h-3 inline-flex bg-[#CECECE] rounded-md'>
                    <span className='w-[50%] h-full bg-yellow-400 rounded-lg'></span>
                    </div>
                    <p className='text-base font-normal text-[#1D1D1D]'>50</p>
                   </div>

                   <div className='flex gap-2 justify-between items-center'>
                    <p className='text-base font-normal text-[#1D1D1D]'>4</p>
                    <div className='w-full h-3 inline-flex bg-[#CECECE] rounded-md'>
                    <span className='w-[5%] h-full bg-yellow-400 rounded-lg'></span>
                    </div>
                    <p className='text-base font-normal text-[#1D1D1D]'>5</p>
                   </div>

                   <div className='flex gap-2 justify-between items-center'>
                    <p className='text-base font-normal text-[#1D1D1D]'>3</p>
                    <div className='w-full h-3 inline-flex bg-[#CECECE] rounded-md'>
                    <span className='w-[10%] h-full bg-yellow-400 rounded-lg'></span>
                    </div>
                    <p className='text-base font-normal text-[#1D1D1D]'>10</p>
                   </div>

                   <div className='flex gap-2 justify-between items-center'>
                    <p className='text-base font-normal text-[#1D1D1D]'>2</p>
                    <div className='w-full h-3 inline-flex bg-[#CECECE] rounded-md'>
                    <span className='w-[30%] h-full bg-yellow-400 rounded-lg'></span>
                    </div>
                    <p className='text-base font-normal text-[#1D1D1D]'>30</p>
                   </div>

                   <div className='flex gap-2 justify-between items-center'>
                    <p className='text-base font-normal text-[#1D1D1D]'>1</p>
                    <div className='w-full h-3 inline-flex bg-[#CECECE] rounded-md'>
                    <span className='w-[2%] h-full bg-yellow-400 rounded-lg'></span>
                    </div>
                    <p className='text-base font-normal text-[#1D1D1D]'>2</p>
                   </div>


                  </div>

                </div>
            </div>
          }




          {/* discussion part */}

          {
            discussion && <div className='flex flex-col gap-3 pt-10 text-[#1D1D1D]'>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
          </p>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literatureenaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section.
          </p>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literatureenaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section.
          </p>
          </div>
          }



      </div>
    </>
  )
}

export default ReviewSection
