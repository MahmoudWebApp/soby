import { Tag } from 'antd'
import React from 'react'

const TextEnAr:React.FC<{t1:string,t2:string}> = (props) => {
  return (
    <div className='flex flex-col'>
        <span>{props.t1}</span>
        <Tag className='text-white w-fit bg-[#f7a833] ml-auto'>{props.t2}</Tag>
    </div>
  )
}

export default TextEnAr