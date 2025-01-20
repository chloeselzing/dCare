import React from 'react'

type Props = {}

const Icon = ({icon}) => {
  return (
    <div className='w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full bg-[#6b5d47] flex place-content-center items-center'>
        {icon}
    </div>
  )
}

export default Icon