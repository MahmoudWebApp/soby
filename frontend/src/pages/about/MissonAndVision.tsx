import { Spin } from "antd";
import { useGetMissionVisionDataQuery } from "../../redux/api/aboutPageApi/missionVisionApi";
import { IMissionVisionProps } from "../../models/MissionVision.model";
import { useState } from "react";
const MissionAndVision = () => {
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const lang= localStorage.getItem("lang")
    const { missionVisionData, isLoadingData } = useGetMissionVisionDataQuery<{ missionVisionData: IMissionVisionProps, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            isLoadingData: isLoading,
            missionVisionData: data?.result
        }),
    });


    return (
        <Spin spinning={isLoadingData} >
            <div className={`flex md:flex-row  lg:gap-12 gap-6 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 ${classLang}`}>
                <div className="flex flex-col gap-y-3 md:w-1/2 w-full">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                        {lang === "en" ? missionVisionData?.vision_subtitle_en : missionVisionData?.vision_subtitle_ar}
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        {lang === "en" ? missionVisionData?.vision_title_en : missionVisionData?.vision_title_ar}
                    </h3>
                    <div className="md:mt-6 mt-3">
                        <ul className="items-start rtl:flex-end flex-col gap-x-2">
                            {missionVisionData?.vision_content?.map((x:any,index:number) => 
                            <li key={`vision_${index}`}>
                                    <p className="xl:text-lg  text-xs  text-soby-gray-dark-3">
                                    {lang === "en" ? x.content_en : x.content_ar}  
                                    </p>
                          </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 md:w-1/2 w-full">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                    {lang === "en" ? missionVisionData?.mission_subtitle_en : missionVisionData?.mission_subtitle_ar}
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                    {lang === "en" ? missionVisionData?.mission_title_en : missionVisionData?.mission_title_ar}
                    </h3>
                    <div className="md:mt-6 mt-3">
                    <ul className="items-start rtl:flex-end flex-col gap-x-2">
                            {missionVisionData?.mission_content?.map((x:any,index:number) => 
                            <li key={`vision_${index}`}>
                                    <p className="xl:text-lg  text-xs  text-soby-gray-dark-3">
                                    {lang === "en" ? x.content_en : x.content_ar}  
                                    </p>
                          </li>
                            )}
                        </ul>
                    </div>
                </div>

            </div>
        </Spin>


    )
}

export default MissionAndVision
