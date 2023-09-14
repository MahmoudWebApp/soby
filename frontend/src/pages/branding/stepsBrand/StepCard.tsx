import React from 'react'

interface IProps {

    description: string;
    num: number;

}
const StepCard: React.FC<IProps> = (props) => {

    return (
        <div className=" relative flex flex-col bg-white lg:w-[359px] md:w-[48%] w-full items-center h-[178px] px-6 justify-center  shadow-lg gap-y-6 ">
            <p className=" text-soby-gray-dark-3 text-base text-center">
                {props.description}
            </p>
            <span className='absolute text-6xl font-extrabold  -bottom-[13%] left-0 text-soby-gray-blue-gray z-[99]'>
                {props.num}
            </span>
        </div>
    )
}

export default StepCard