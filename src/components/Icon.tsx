import React from 'react'

type Props = {}

const Icon = ({icon}) => {
  return (
    <div className='w-[100px] h-[100px] rounded-full bg-[#6b5d47] flex place-content-center items-center'>
        {icon}
    </div>
  )
}

export default Icon