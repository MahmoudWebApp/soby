import { t } from "i18next";
import "video-react/dist/video-react.css";
const ValueBrand = () => {

    return (
        <div className='lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6'>
            <div className="flex items-center gap-6 bg-[#1a2442] min-h-[20rem] md:rounded-3xl rounded-md md:flex-nowrap flex-wrap  lg:py-12 p-8">

                <div className="md:w-2/5 w-full flex justify-center lg:px-0 md:px-3 px-0">
                    <video controls controlsList=" timeline volume"
                        poster="https://placehold.co/331x285"
                        src={''}
                        className="w-[331px] md:h-[285px] h-auto md:rounded-3xl rounded-lg" />
                </div>
                <div className="flex flex-col gap-y-3 md:w-3/5 w-full">


                    <h3 className="text-soby-yellow-light text-5xl font-semibold">
                        Value
                    </h3>
                    <div className="">
                        <ul className="flex items-start rtl:flex-end flex-col lg:gap-y-1 gap-y-2">
                            <li>
                                <p className="xl:text-lg  text-xs  text-soby-gray-light-2  ">
                                    {`${t("Building and marketing their personal brands")}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-lg  text-xs  text-soby-gray-light-2  ">
                                    {`${t(
                                        "Accelerating the marketing of their products and doubling their sales"
                                    )}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-lg  text-xs  text-soby-gray-light-2  ">
                                    {`${t("Discovering and nurturing talents")}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-lg  text-xs  text-soby-gray-light-2 ">
                                    {`${t("Creative thinking and organizational agility")}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-lg  text-xs  text-soby-gray-light-2 ">
                                    {`${t("Collecting their debts without losing their customers")}`}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ValueBrand