import { Spin } from "antd";
import { useGetSufferBrandingQuery } from "../../../redux/api/brandingPageApi/sufferBrandingApi";
import SufferCard from "./SufferBrandCard"
import { t } from "i18next";
import { useState } from "react";


const SufferBrand = () => {
    const lang = localStorage.getItem("lang")
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const { sufferData, isLoadingData } =
        useGetSufferBrandingQuery<{ sufferData: any, isLoadingData: boolean }>(undefined, {
            selectFromResult: ({ data, isLoading }) => ({
                sufferData: data?.suffer,
                isLoadingData: isLoading
            }),
        });

    return (
        <Spin spinning={isLoadingData}>
            <div className={`flex md:flex-row  gap-12 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 ${classLang}`}>
                <div className="flex flex-col gap-y-3 ">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                        {`${t("Do you")}`}
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        {`${t("Suffer")}`}
                    </h3>
                    <div className="mt-12 flex items-center lg:gap-12 md:gap-x-[4%] gap-y-6 flex-wrap ">
                        <SufferCard
                            description={lang === "en" ? sufferData?.text_one_en : sufferData?.text_one_ar}
                            key={"suffer_1"} />
                        <SufferCard
                            description={lang === "en" ? sufferData?.text_two_en : sufferData?.text_two_ar}
                            key={"suffer_2"} />
                        <SufferCard
                            description={lang === "en" ? sufferData?.text_three_en : sufferData?.text_three_ar}
                            key={"suffer_3"} />
                        <SufferCard
                            description={lang === "en" ? sufferData?.text_four_en : sufferData?.text_four_ar}
                            key={"suffer_4"} />
                        <SufferCard
                            description={lang === "en" ? sufferData?.text_five_en : sufferData?.text_five_ar}
                            key={"suffer_5"} />
                        <SufferCard
                            description={lang === "en" ? sufferData?.text_six_en : sufferData?.text_six_ar}
                            key={"suffer_6"} />
                    </div>
                </div>
            </div>
        </Spin>

    )

}

export default SufferBrand