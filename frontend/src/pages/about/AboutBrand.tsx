import { Spin } from "antd";
import "video-react/dist/video-react.css";
import { IBrandAboutProps } from "../../models/BrandAbout.model";
import { useGetStoryAboutQuery } from "../../redux/api/aboutPageApi/storyAboutApi";
import { useState } from "react";
const AboutBrand = () => {
    const lang = localStorage.getItem("lang")
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const { storyAboutData, isLoadingData } =
        useGetStoryAboutQuery<{ storyAboutData: IBrandAboutProps, isLoadingData: boolean }>(undefined,
            {
                selectFromResult: ({ data, isLoading }) => ({
                    storyAboutData: data?.story,
                    isLoadingData: isLoading
                }),
            });

    return (
        <Spin spinning={isLoadingData}>
            <div className={`flex md:flex-row  lg:gap-12 gap-6 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 ${classLang}`}>
                <div className="grid grid-row-2 gap-y-6">
                    <div className="flex md:flex-row  lg:gap-12 gap-6 flex-col">
                        <div className="flex flex-col gap-y-3 md:w-1/2 w-full">
                            <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                                {lang === "en" ? storyAboutData?.subtitle_en : storyAboutData?.subtitle_ar}
                            </h4>
                            <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                                {lang === "en" ? storyAboutData?.title_en : storyAboutData?.title_ar}
                            </h3>
                            <div className="md:mt-6 mt-3">
                                <ul className="flex items-start rtl:flex-end flex-col gap-y-3">
                                    {storyAboutData?.content?.map((x: any, index: number) => {
                                        if (index && index < 3) {
                                            return <li key={`ab-${index}`}>
                                                <p className="xl:text-xl  text-xs  text-soby-gray-dark-3   ">
                                                    {lang === "en" ? x.content_en : x?.content_ar}
                                                </p>
                                            </li>
                                        }
                                    })}


                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full flex justify-center items-center">
                            {storyAboutData?.video_link?.includes("https") ?
                                <iframe className="sm:w-[500px] w-full" height="392"
                                    src={storyAboutData?.video_link}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>

                                </iframe> : <video controls controlsList=" timeline volume"
                                    poster="https://placehold.co/500x392"
                                    className="sm:w-[500px] w-full lg:h-[392px] h-auto md:rounded-3xl rounded-lg" />}

                        </div>
                    </div>
                    <div className="flex md:flex-row  lg:gap-12 gap-6 flex-col">
                        <div className="flex flex-col gap-y-3 md:w-1/2 w-full">

                            <div className="md:mt-6 mt-3">
                                <ul className="flex items-start rtl:flex-end flex-col gap-y-3">
                                    {storyAboutData?.content?.map((x: any, index: number) => {
                                        if (3 < index && index < 6) {
                                            return <li key={`ab-${index}`}>
                                                <p className="xl:text-xl  text-xs  text-soby-gray-dark-3   ">
                                                    {lang === "en" ? x.content_en : x?.content_ar}
                                                </p>
                                            </li>
                                        }
                                    })}


                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3 md:w-1/2 w-full">

                            <div className="md:mt-6 mt-3">
                                <ul className="flex items-start rtl:flex-end flex-col gap-y-3">
                                    {storyAboutData?.content?.map((x: any, index: number) => {
                                        if (6 < index && index < storyAboutData?.content?.length) {
                                            return <li key={`ab-${index}`}>
                                                <p className="xl:text-xl  text-xs  text-soby-gray-dark-3   ">
                                                    {lang === "en" ? x.content_en : x?.content_ar}
                                                </p>
                                            </li>
                                        }
                                    })}


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Spin>
    )
}

export default AboutBrand
