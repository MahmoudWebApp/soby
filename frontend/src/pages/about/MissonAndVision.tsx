import { t } from "i18next";
const MissionAndVision = () => {
    return (
        <div className="  flex md:flex-row  lg:gap-12 gap-6 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6">
            <div className="flex flex-col gap-y-3 md:w-1/2 w-full">
                <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                    Soby
                </h4>
                <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                    Vision
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
            <div className="flex flex-col gap-y-3 md:w-1/2 w-full">
                <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                   Soby
                </h4>
                <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                 Mission
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

export default MissionAndVision
