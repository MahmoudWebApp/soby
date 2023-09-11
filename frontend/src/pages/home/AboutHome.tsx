import { t } from "i18next";
import "video-react/dist/video-react.css";
const AboutHome = () => {
    return (
        <div className="flex md:flex-row  lg:gap-12 gap-6 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6">
            <div className="md:w-1/2 w-full flex justify-center">
                <video controls controlsList=" timeline volume"
                    src={''}
                    className="w-full lg:h-[392px] h-auto md:rounded-3xl rounded-lg" />
            </div>
            <div className="flex flex-col gap-y-3 md:w-1/2 w-full">
                <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                    About
                </h4>
                <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                    Soby
                </h3>
                <div className="md:mt-6 mt-3">
                    <ul className="items-start rtl:flex-end flex-col">
                        <li>
                            <p className="xl:text-xl  text-xs  text-soby-gray-dark-3   ">
                                {`${t("Building and marketing their personal brands")}`}
                            </p>
                        </li>
                        <li>
                            <p className="xl:text-xl  text-xs  text-soby-gray-dark-3  ">
                                {`${t(
                                    "Accelerating the marketing of their products and doubling their sales"
                                )}`}
                            </p>
                        </li>
                        <li>
                            <p className="xl:text-xl  text-xs  text-soby-gray-dark-3   ">
                                {`${t("Discovering and nurturing talents")}`}
                            </p>
                        </li>
                        <li>
                            <p className="xl:text-xl  text-xs  text-soby-gray-dark-3 ">
                                {`${t("Creative thinking and organizational agility")}`}
                            </p>
                        </li>
                        <li>
                            <p className="xl:text-xl  text-xs  text-soby-gray-dark-3  ">
                                {`${t("Collecting their debts without losing their customers")}`}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutHome
