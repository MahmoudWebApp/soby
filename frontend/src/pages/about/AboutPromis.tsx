import { Spin } from "antd";
import { t } from "i18next";
import { IBrandAboutProps } from "../../models/BrandAbout.model";
import { useGetBrandAboutQuery } from "../../redux/api/aboutPageApi/brandAboutApi";

const AboutPromise = () => {
    const { brandAboutData, isLoadingData } = useGetBrandAboutQuery<{ brandAboutData: IBrandAboutProps, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            brandAboutData: data?.brand,
            isLoadingData: isLoading
        }),
    });
    console.log(brandAboutData);

    return (
        <Spin spinning={isLoadingData}>
            <div className="flex md:flex-row  lg:gap-12 gap-6 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6">
                <div className="md:w-1/2 w-full flex justify-center">
                    <img src={"https://placehold.co/378x326"} className="md:w-[378px] w-full md:h-[326px] h-auto md:rounded-3xl rounded-md" />
                </div>
                <div className="flex flex-col gap-y-3 md:w-1/2 w-full">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                        Brand
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        Promise
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
        </Spin>

    )
}

export default AboutPromise
