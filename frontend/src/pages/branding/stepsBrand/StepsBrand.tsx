import { t } from "i18next";
import { useGetAllStepsQuery } from "../../../redux/api/brandingPageApi/stepsBrandingApi";
import StepCard from "./StepCard"
import { Spin } from "antd";
import { useState } from "react";



const StepsBrand = () => {
    const lang = localStorage.getItem("lang")
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const { stepsData, isLoadingData } =
        useGetAllStepsQuery<{ stepsData: any, isLoadingData: boolean }>(undefined, {
            selectFromResult: ({ data, isLoading }) => ({
                stepsData: data?.data[0],
                isLoadingData: isLoading
            }),
        });
    console.log("sss", stepsData);

    return (
        <Spin spinning={isLoadingData}>
            <div className={`flex md:flex-row  gap-12 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 ${classLang}`}>
                <div className="flex flex-col gap-y-3 ">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                        {`${t("Our")}`}
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        {`${t("Steps")}`}
                    </h3>
                    <div className="mt-12 flex items-center lg:gap-12 md:gap-x-[4%] gap-y-6 flex-wrap ">
                        <StepCard
                            description={lang === "en" ? stepsData?.text_one_en : stepsData?.text_one_ar}
                            num={1}
                            key={"step_1"} />
                        <StepCard
                            description={lang === "en" ? stepsData?.text_two_en : stepsData?.text_two_ar}
                            num={2}
                            key={"step_2"} />
                        <StepCard
                            description={lang === "en" ? stepsData?.text_three_en : stepsData?.text_three_ar}
                            num={3}
                            key={"step_3"} />
                    </div>
                </div>
            </div>
        </Spin>
    )

}

export default StepsBrand