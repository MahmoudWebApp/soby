import React from 'react'

interface IProps {

    description: string;
   
}
const SufferCard: React.FC<IProps> = (props) => {

    return (
        <div className="flex flex-col bg-white lg:w-[359px] md:w-[48%] w-full items-center h-[178px] px-6 justify-center  shadow-lg gap-y-6 ">
                <p className=" text-soby-gray-dark-3 text-base text-center">
                    {props.description}
                </p>
        </div>
    )
}

export default SufferCard