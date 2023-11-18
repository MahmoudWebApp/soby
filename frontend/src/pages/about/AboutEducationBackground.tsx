import { useGetEducationAboutQuery } from "../../redux/api/aboutPageApi/educationAboutApi";
import { IEducationProps } from "../../models/EducationAbout.model";
import { Spin } from "antd";
import { useState } from "react";

const AboutEducationBackground = () => {
    const lang = localStorage.getItem("lang")
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const { educationData, isLoadingData } = useGetEducationAboutQuery<{ educationData: IEducationProps, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            isLoadingData: isLoading,
            educationData: data?.education
        }),
    });
    return (
        <Spin spinning={isLoadingData}>
            <div className={`flex md:flex-row  lg:gap-12 gap-6 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 ${classLang}`}>

                <div className="flex flex-col gap-y-3 w-full">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                        {lang === "en" ? educationData?.subtitle_en : educationData?.subtitle_ar}
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        {lang === "en" ? educationData?.title_en : educationData?.title_ar}
                    </h3>
                    <div className="flex md:mt-6 mt-3 justify-between md:flex-nowrap flex-wrap gap-y-6" >
                        <div className="md:w-1/2 w-full">
                            <ul className="items-start rtl:flex-end flex-col">
                                {educationData&&JSON.parse(educationData?.content_one)?.map((x: any, index: number) => {
                                    return <li key={`ed-one-${index}`}>
                                        <p className="xl:text-xl  text-xs  text-soby-gray-dark-3   ">
                                            {lang === "en" ? x.content_en : x?.content_ar}
                                        </p>
                                    </li>

                                })} 

                            </ul>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <ul className="items-start rtl:flex-end flex-col">
                                 {educationData&&JSON.parse(educationData?.content_two)?.map((x: any, index: number) => {
                                    return <li key={`ed-two-${index}`}>
                                        <p className="xl:text-xl  text-xs  text-soby-gray-dark-3   ">
                                            {lang === "en" ? x.content_en : x?.content_ar}
                                        </p>
                                    </li>
                                })} 
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </Spin>

    )
}

export default AboutEducationBackground
