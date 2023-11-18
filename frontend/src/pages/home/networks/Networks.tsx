import { Spin } from "antd";
import { INetworksProps } from "../../../models/Networks.model";
import { useGetAllNetworksQuery } from "../../../redux/api/homePageApi/networksHomeApi";
import NetworkCard from "./NetworkCard"
import { t } from "i18next";
import { useState } from "react";

const Networks = () => {
    const lang = localStorage.getItem("lang")
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const { networks, isLoadingData } = useGetAllNetworksQuery<{ networks: INetworksProps[], isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            networks: data?.networks ?? [],
            isLoadingData: isLoading
        }),
    });

    return (
        <Spin spinning={isLoadingData}>
            <div className={`flex md:flex-row  gap-12 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 ${classLang}`}>
                <div className="flex flex-col gap-y-3 ">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                        {`${t("Connect")}`}
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        {`${t("with Soby")}`}
                    </h3>
                    <div className="mt-12 flex items-center lg:gap-12 md:gap-x-[4%] gap-y-6 flex-wrap ">
                        {networks?.map(n => <NetworkCard
                            iconSrc={n.icon} name={lang === "en" ? n?.title_en : n.title_ar}
                            description={lang === "en" ? n?.content_en : n?.content_ar}
                            findMoreUrl={n?.link} key={`network_${n?.id}`} />)}
                    </div>
                </div>
            </div>
        </Spin>

    )

}

export default Networks