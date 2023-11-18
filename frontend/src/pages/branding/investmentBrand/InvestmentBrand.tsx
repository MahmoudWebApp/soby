import { t } from "i18next"
import InvestmentCard from "./InvestmentCard"
import { useState } from "react";
import { useGetAllInvestmentsQuery } from "../../../redux/api/brandingPageApi/investmentBrandApi";
import { Spin } from "antd";







const InvestmentBrand = () => {
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const lang = localStorage.getItem("lang");
    const { investmentsData, isLoadingData } = useGetAllInvestmentsQuery<{ investmentsData: any, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            investmentsData: data?.data,
            isLoadingData: isLoading
        }),
    });

    return (
        <Spin spinning={isLoadingData}>
            <div className={`lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 bg-soby-light-2 ${classLang}`}>
                <div className="flex flex-col gap-y-3">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                        {`${t("Brand training")}`}
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        {`${t("Investment")}`}
                    </h3>

                </div>
                <div className="mt-12 flex items-center lg:gap-12 md:gap-x-[4%] gap-y-6 flex-wrap ">


                    <InvestmentCard title={lang === "en" ? investmentsData?.title_one_en : investmentsData?.title_one_ar}
                        description={lang === "en" ? investmentsData?.description_one_en : investmentsData?.description_one_ar}
                        planUrl={investmentsData?.link_one}
                        price={investmentsData?.price_one} />

                    <InvestmentCard title={lang === "en" ? investmentsData?.title_two_en : investmentsData?.title_two_ar}
                        description={lang === "en" ? investmentsData?.description_two_en : investmentsData?.description_two_ar}
                        planUrl={investmentsData?.link_two}
                        price={investmentsData?.price_two} />

                    <InvestmentCard title={lang === "en" ? investmentsData?.title_three_en : investmentsData?.title_three_ar}
                        description={lang === "en" ? investmentsData?.description_three_en : investmentsData?.description_three_ar}
                        planUrl={investmentsData?.link_three}
                        price={investmentsData?.price_three} />
                </div>

            </div>
        </Spin>
    )
}

export default InvestmentBrand