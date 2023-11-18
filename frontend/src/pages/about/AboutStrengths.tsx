import { Spin } from "antd";
import { useGetCliftonAboutQuery } from "../../redux/api/aboutPageApi/cliftonAboutApi";
import { ICliftonAboutProps } from "../../models/CliftonAbout.model";
import { useState } from "react";

const AboutStrengths = () => {
    const lang = localStorage.getItem("lang");
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const { cliftonAboutData, isLoadingData } = useGetCliftonAboutQuery<{ cliftonAboutData: ICliftonAboutProps, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            isLoadingData: isLoading,
            cliftonAboutData: data?.clifton
        }),
    });



    return (
        <Spin spinning={isLoadingData}>
            <div className={`flex md:flex-row  lg:gap-12 gap-6 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 ${classLang}`}>
              
                        <div className="flex flex-col gap-y-3 md:w-1/2 w-full">
                            <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                                {lang === "en" ? cliftonAboutData?.subtitle_en : cliftonAboutData?.subtitle_ar}
                            </h4>
                            <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                                {lang === "en" ? cliftonAboutData?.title_en : cliftonAboutData?.title_ar}
                            </h3>
                            <div className="md:mt-6 mt-3">
                                 <ul className="items-start rtl:flex-end flex-col">
                                    {cliftonAboutData?.content?.map((x: any, index: number) => {
                                        
                                            return <li key={`ab-${index}`}>
                                                <p className="xl:text-xl  text-xs  text-soby-gray-dark-3   ">
                                                    {lang === "en" ? x.content_en : x?.content_ar}
                                                </p>
                                            </li>
                                        
                                    })}

                                </ul> 
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full flex justify-center items-center">
                            <img src={cliftonAboutData?.image?cliftonAboutData?.image:"https://placehold.co/378x326"} className="md:w-[378px] w-full md:h-[326px] h-auto md:rounded-3xl rounded-md" />
                        </div>
                 
                   
              
            </div>
        </Spin>

    )
}

export default AboutStrengths
