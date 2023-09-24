import { t } from "i18next";
import { useGetEducationAboutQuery } from "../../redux/api/aboutPageApi/educationAboutApi";
import { IEducationProps } from "../../models/EducationAbout.model";
import { Spin } from "antd";

const AboutEducationBackground = () => {
    const { educationData, isLoadingData } = useGetEducationAboutQuery<{ educationData: IEducationProps, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            isLoadingData: isLoading,
            educationData: data?.education
        }),
    });
    console.log(educationData);

    return (
        <Spin spinning={isLoadingData}>
            <div className="flex md:flex-row  lg:gap-12 gap-6 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6">

                <div className="flex flex-col gap-y-3 w-full">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                        Education
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        Background
                    </h3>
                    <div className="flex md:mt-6 mt-3 justify-between md:flex-nowrap flex-wrap gap-y-6" >
                        <div className="md:w-1/2 w-full">
                            <ul className="items-start rtl:flex-end flex-col">
                                <li>
                                    <p className="xl:text-lg  text-xs  text-soby-gray-dark-3   ">
                                        {`${t("Building and marketing their personal brands")}`}
                                    </p>
                                </li>
                                <li>
                                    <p className="xl:text-lg  text-xs  text-soby-gray-dark-3  ">
                                        {`${t(
                                            "Accelerating the marketing of their products and doubling their sales"
                                        )}`}
                                    </p>
                                </li>
                                <li>
                                    <p className="xl:text-lg  text-xs  text-soby-gray-dark-3   ">
                                        {`${t("Discovering and nurturing talents")}`}
                                    </p>
                                </li>
                                <li>
                                    <p className="xl:text-lg  text-xs  text-soby-gray-dark-3 ">
                                        {`${t("Creative thinking and organizational agility")}`}
                                    </p>
                                </li>
                                <li>
                                    <p className="xl:text-lg  text-xs  text-soby-gray-dark-3  ">
                                        {`${t("Collecting their debts without losing their customers")}`}
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <ul className="items-start rtl:flex-end flex-col">
                                <li>
                                    <p className="xl:text-lg  text-xs  text-soby-gray-dark-3   ">
                                        {`${t("Building and marketing their personal brands")}`}
                                    </p>
                                </li>
                                <li>
                                    <p className="xl:text-lg  text-xs  text-soby-gray-dark-3  ">
                                        {`${t(
                                            "Accelerating the marketing of their products and doubling their sales"
                                        )}`}
                                    </p>
                                </li>
                                <li>
                                    <p className="xl:text-lg  text-xs  text-soby-gray-dark-3   ">
                                        {`${t("Discovering and nurturing talents")}`}
                                    </p>
                                </li>
                                <li>
                                    <p className="xl:text-lg  text-xs  text-soby-gray-dark-3 ">
                                        {`${t("Creative thinking and organizational agility")}`}
                                    </p>
                                </li>
                                <li>
                                    <p className="xl:text-lg  text-xs  text-soby-gray-dark-3  ">
                                        {`${t("Collecting their debts without losing their customers")}`}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </Spin>

    )
}

export default AboutEducationBackground
