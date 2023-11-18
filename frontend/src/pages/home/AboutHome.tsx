import "video-react/dist/video-react.css";
import { useGetAboutHomeDataQuery } from "../../redux/api/homePageApi/aboutHomeApi";
import { Spin } from "antd";
import { useState } from "react";
import { t } from "i18next";
const AboutHome = () => {
    const lang = localStorage.getItem("lang")
    const [isShow, setIsShow] = useState(false)
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const { aboutHomeData, isLoadingData } = useGetAboutHomeDataQuery<{ aboutHomeData: any, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            aboutHomeData: data?.about,
            isLoadingData: isLoading
        }),
    });

    return (
        <Spin spinning={isLoadingData}>


            <div className={`lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 ${classLang}`}>
                <div className="grid grid-row-2 gap-y-6">
                    <div className="flex md:flex-row  lg:gap-12 gap-6 flex-col">
                        <div className="md:w-1/3 w-full flex justify-center items-center ">
                            {/* <video controls controlsList=" timeline volume"
                    src={'https://youtu.be/h07Q9rIWaLg'}
                    className="w-full lg:h-[392px] h-auto md:rounded-3xl rounded-lg" /> */}
                            <iframe width="560" height="300" src={aboutHomeData?.video_link}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen className="md:w-[560px] w-full">

                            </iframe>
                        </div>
                        <div className="flex flex-col gap-y-3 md:w-2/3 w-full">
                            <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                                {lang === "en" ? aboutHomeData?.subtitle_en : aboutHomeData?.subtitle_ar}
                            </h4>
                            <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                                {lang === "en" ? aboutHomeData?.title_en : aboutHomeData?.title_ar}
                            </h3>
                            <div className="md:mt-6 mt-3">
                                <ul className="flex items-start rtl:flex-end flex-col gap-y-3">

                                    {aboutHomeData?.content?.map((x: any, index: number) => {
                                        if (index < 2) {
                                            return <li key={`ab-${index}`}>
                                                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3   ">
                                                    {lang === "en" ? x.content_en : x?.content_ar}
                                                </p>
                                            </li>
                                        }
                                    })}


                                </ul>





                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div className={`md:mt-6 mt-3  ${isShow ? "block" : "hidden"} transition-all`}>
                            <ul className="flex items-start rtl:flex-end flex-col gap-y-3">
                                {aboutHomeData?.content?.map((x: any, index: number) => {
                                    if (2 < index && index < aboutHomeData?.content?.length) {
                                        return <li key={`ab-${index}`}>
                                            <p className="xl:text-lg  text-xs  text-soby-gray-dark-3   ">
                                                {lang === "en" ? x.content_en : x?.content_ar}
                                            </p>
                                        </li>
                                    }
                                })}


                            </ul>
                        </div>
                        <div className="flex justify-end">
                            <button className="text-sx underline hover:text-soby-yellow-dark font-semibold"

                                onClick={() => setIsShow(!isShow)}>
                                {isShow ? `${t("Read Less")}` : `${t("Read More")}`}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </Spin>
    )
}

export default AboutHome
