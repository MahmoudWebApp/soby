import { t } from 'i18next';
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
        <div className="flex flex-col bg-white lg:w-[398px] md:w-[48%] w-full 
        items-center 
        lg:h-[560px] md:h-[600px] h-auto px-8 justify-between shadow-lg gap-y-3 py-6 ">

            <div className="flex flex-col gap-y-6 items-center">
                <img src={props.iconSrc} alt="" className='h-[111px] w-[127px] ]' />
                <h4 className="text-soby-yellow-light text-2xl font-semibold">
                    {props.name}
                </h4>

                <p className=" text-soby-gray-dark-3 text-base ">
                    {props.description}
                </p>

            </div>
            <button className='rounded-xl bg-soby-gray-blue-gray text-lg text-white px-6 py-3'
                onClick={() => navigate(props.findMoreUrl)}
            >
                {`${t("Find out more")}`}
            </button>



        </div>
    )
}

export default NetworkCard