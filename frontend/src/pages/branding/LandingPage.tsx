import { Spin } from "antd";
import { useGetLandingPageBrandingQuery } from "../../redux/api/brandingPageApi/landingPageBrandingApi";
import { Link } from "react-router-dom";
import { t } from "i18next";
import { useState } from "react";

const LandingPage = () => {
    const lang = localStorage.getItem("lang")
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const { landingPageData, isLoadingData } = 
    useGetLandingPageBrandingQuery<{ landingPageData: any, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            landingPageData: data?.data,
            isLoadingData: isLoading
        }),
    });

    return (
        <Spin spinning={isLoadingData}>
            <div className={`lg:h-[800px] md:h-[600px] sm:h-[500px] h-[400px]  w-full md:mt-[96px] mt-[70px]   flex flex-col justify-center ${classLang}`}
                style={{
                    backgroundImage: `url(${landingPageData?.image}) `,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }}>
                <span className="  h-full w-1/2 items-center lg:pl-24 pl-6 mr-auto ">
                    <div

                        className={`flex flex-col  items-start justify-center h-full md:gap-y-5 xl:gap-y-8 sm:gap-y-3 gap-y-2 w-full   animate-[spinner-grow_2s_ease-in-out]`}
                    >

                        <div>
                            <h2 className="lg:text-4xl sm:text-lg text-sm text-soby-yellow-light font-bold">
                                {lang === "en" ? landingPageData?.subtitle_en : landingPageData?.subtitle_ar}
                            </h2>
                        </div>
                        <div className="md:-mt-6 -mt-3">
                            <h2 className="lg:text-7xl sm:text-2xl text-xl text-soby-gray-blue-gray font-bold ">
                                {lang === "en" ? landingPageData?.title_en : landingPageData?.title_ar}
                            </h2>
                        </div>
                        <div className="lg:mt-6 sm:mt-0 -mt-2 ">

                            <ul className="items-start rtl:flex-end flex-col">
                                {landingPageData?.content?.map((x: any, index: number) => {
                                        return <li key={`lp-${index}`}>
                                            <p className="xl:text-xl  sm:text-xs text-[.5rem]  text-soby-gray-dark-3    ">
                                                {lang === "en" ? x.content_en : x?.content_ar}
                                            </p>
                                        </li>
                                    
                                })}

                            </ul>
                        </div>
                        <div className="flex md:flex-row  md:gag-x-3  gap-x-1 md:mt-0 sm:mt-5 mt-2 ">
                            <Link
                                to={`${landingPageData?.brochure}`}
                                download="Example-PDF-document"
                                target="_blank"
                                rel="noopener noreferrer"

                            >

                                <button className='rounded-3xl bg-soby-gray-blue-gray md:text-lg sm:text-sm text-[10px] text-white  md:px-6 px-2 md:py-3 py-1'

                                >

                                    {`${t("Brochure")}`}
                                </button>
                            </Link>
                            <Link
                                to={`${landingPageData?.link}`}
                                download="Example-PDF-document"
                                target="_blank"
                                rel="noopener noreferrer"

                            >
                                <button
                                    className="md:ms-8 rounded-3xl ms-1 
            md:px-6 px-2 md:py-3 py-1 bg-soby-yellow-dark flex 
          md:text-lg sm:text-sm text-[10px]
          items-center">


                                    {`${t("Link")}`}
                                </button>
                            </Link>
                        </div>
                    </div>
                </span>

            </div>
        </Spin>
    )
}

export default LandingPage