import { t } from 'i18next';
import React from 'react'
import { useNavigate } from 'react-router-dom';
interface IProps {
    title: string;
    description: string;
    planUrl: string;
    price: number | string;
}
const InvestmentCard: React.FC<IProps> = (props) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col bg-white lg:w-[398px] md:w-[48%]
         w-full items-center h-[319px] px-12 justify-center  shadow-lg gap-y-3 
         ">
            <h5 className="text-soby-gray-dark-4 text-xl font-semibold">
                {props.title}
            </h5>
            <div>
                <p className=" text-soby-gray-dark-3 text-base text-center">
                    {props.description}
                </p>
            </div>
            <h4 className="text-soby-yellow-light text-4xl font-semibold">
                AED {props.price}
            </h4>
            <button className='rounded-3xl bg-soby-gray-blue-gray text-lg text-white px-6 py-3'
                onClick={() => navigate(props.planUrl)}
            >
               {`${t("Book your seat")}`}
            </button>
        </div>
    )
}

export default InvestmentCard