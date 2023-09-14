import React from 'react'
import { useNavigate } from 'react-router-dom';
interface IProps {
    iconSrc: string;
    name: string;
    description: string;
    findMoreUrl: string;
}
const AboutPublicationCard: React.FC<IProps> = (props) => {
   const navigate = useNavigate();
    return (
        <div className="flex flex-col  lg:w-[285px] md:w-[48%] w-full  h-[425px] px-6 justify-center  gap-y-4 ">
            <img src={props.iconSrc} alt="" className='h-[211px] w-[190px] ]'/>
            <h4 className="text-soby-gray-dark-4 text-2xl font-semibold">
                {props.name}
            </h4>
            <div>
                <p className=" text-soby-gray-dark-3 text-base ">
                    {props.description}
                </p>
            </div>
            <button className='rounded-3xl bg-soby-gray-blue-gray text-base w-fit text-white px-4 py-2'
                onClick={() => navigate(props.findMoreUrl)}
            >
                Find out more
            </button>
        </div>
    )
}

export default AboutPublicationCard