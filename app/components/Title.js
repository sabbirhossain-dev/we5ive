import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div>
      <h3 className='text-base text-[#7E53D4] font-light tracking-wider'>{text1}</h3>
      <h2 className='font-semibold text-2xl text-[#1D1D1D]'>{text2}</h2>
    </div>
  )
}

export default Title
