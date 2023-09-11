import React from 'react'
import { useNavigate } from 'react-router-dom';
interface IProps {
    iconSrc: string;
    name: string;
    description: string;
    findMoreUrl: string;
}
const NetworkCard: React.FC<IProps> = (props) => {
   const navigate = useNavigate();
    return (
        <div className="flex flex-col bg-white lg:w-[398px] md:w-[48%] w-full items-center h-[506px] px-6 justify-center  shadow-lg gap-y-6 ">
            <img src={props.iconSrc} alt="" className='h-[111px] w-[127px] ]'/>
            <h4 className="text-soby-yellow-light text-4xl font-semibold">
                {props.name}
            </h4>
            <div>
                <p className=" text-soby-gray-dark-3 text-base text-center">
                    {props.description}
                </p>
            </div>
            <button className='rounded-3xl bg-soby-gray-blue-gray text-lg text-white px-6 py-3'
                onClick={() => navigate(props.findMoreUrl)}
            >
                Find out more
            </button>
        </div>
    )
}

export default NetworkCard