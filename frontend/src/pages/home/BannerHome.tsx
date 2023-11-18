import { useState } from "react";
import { useGetBannerHomeDataQuery } from "../../redux/api/homePageApi/bannerHomeApi";
import { Spin } from "antd";



const BannerHome = () => {
  const [dir] = useState(localStorage.getItem("lang"));
  const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
  const lang = localStorage.getItem("lang")
  const { bannerHomeData, isLoadingData } = useGetBannerHomeDataQuery<{ bannerHomeData: any, isLoadingData: boolean }>(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      bannerHomeData: data?.banner,
      isLoadingData: isLoading
    }),
  });
  console.log("banner", bannerHomeData);

  return (
    <Spin spinning={isLoadingData}>
      <div className={`lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 ${classLang}`}>
        <div className="flex items-center gap-6 bg-[#1a2442] min-h-[20rem] md:rounded-3xl rounded-md md:flex-nowrap flex-wrap  lg:py-12 p-8">
          <div className="md:w-2/5 w-full flex justify-center lg:px-0 md:px-3 px-0">
            <img src={bannerHomeData?.image ? bannerHomeData?.image : "https://placehold.co/331x285"}
              className="w-[331px] height-[285px] md:rounded-3xl rounded-md" />
          </div>
          <div className="flex flex-col gap-y-3 md:w-3/5 w-full">

            <h4 className="text-white text-3xl font-bold">
              {lang === "en" ? bannerHomeData?.subtitle_en : bannerHomeData?.subtitle_ar}
            </h4>
            <h3 className="text-soby-yellow-light text-5xl font-semibold">
              {lang === "en" ? bannerHomeData?.title_en : bannerHomeData?.title_ar}
            </h3>
            <div className="">
              <ul className="flex items-start rtl:flex-end flex-col lg:gap-y-1 gap-y-2">
                {bannerHomeData?.content?.map((x: any, index: number) => {
                    return <li key={`bn-${index}`}>
                      <p className="xl:text-lg  text-xs  text-soby-gray-light-2   ">
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

export default BannerHome