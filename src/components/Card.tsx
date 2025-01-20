'use client'

import React from 'react'



const Card = ({title,text}) => {
  return (
    <div className='bg-gradient-to-b from-[#e1c390] to-[#837154] flex flex-col text-center text-white  p-2 py-10 gap-4'>
      <h3 className='font-semibold text-[20px]'>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Card