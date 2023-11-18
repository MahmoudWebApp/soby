// import { t } from "i18next";
import "video-react/dist/video-react.css";
import AboutHome from "../home/AboutHome";
// import { useGetAboutHomeDataQuery } from "../../redux/api/homePageApi/aboutHomeApi";
import { Spin } from "antd";
import { useGetProfilePdfQuery } from "../../redux/api/aboutPageApi/profilePdfApi";
import { Link } from "react-router-dom";
import { t } from "i18next";
import { useState } from "react";
const AboutAbout = () => {
    // const { aboutHomeData, isLoadingData } = useGetAboutHomeDataQuery<{ aboutHomeData: any, isLoadingData: boolean }>(undefined, {
    //     selectFromResult: ({ data, isLoading }) => ({
    //         aboutHomeData: data?.about,
    //         isLoadingData: isLoading
    //     }),
    // });
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const { profilePdfData, isLoadingDataPdf } = useGetProfilePdfQuery<{ profilePdfData: any, isLoadingDataPdf: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            profilePdfData: data?.profile,
            isLoadingDataPdf: isLoading
        }),
    });

    return (
        <Spin spinning={isLoadingDataPdf}>
            <div className=" py-[40px]    ">
                {/* <div className="flex md:flex-row  lg:gap-12 gap-6 flex-col">
                    <div className="flex flex-col gap-y-3 md:w-1/2 w-full">
                        <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                            About
                        </h4>
                        <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                            Soby
                        </h3>
                        <div className="md:mt-6 mt-3">
                            <ul className="items-start rtl:flex-end flex-col">
                                <li>
                                    <p className="xl:text-xl  text-xs  text-soby-gray-dark-3   ">
                                        {`${t("Building and marketing their personal brands")}`}
                                    </p>
                                </li>
                                <li>
                                    <p className="xl:text-xl  text-xs  text-soby-gray-dark-3  ">
                                        {`${t(
                                            "Accelerating the marketing of their products and doubling their sales"
                                        )}`}
                                    </p>
                                </li>
                                <li>
                                    <p className="xl:text-xl  text-xs  text-soby-gray-dark-3   ">
                                        {`${t("Discovering and nurturing talents")}`}
                                    </p>
                                </li>
                                <li>
                                    <p className="xl:text-xl  text-xs  text-soby-gray-dark-3 ">
                                        {`${t("Creative thinking and organizational agility")}`}
                                    </p>
                                </li>
                                <li>
                                    <p className="xl:text-xl  text-xs  text-soby-gray-dark-3  ">
                                        {`${t("Collecting their debts without losing their customers")}`}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full flex justify-center">
                        <video controls controlsList=" timeline volume"
                            src={''}
                            className="w-full lg:h-[392px] h-auto md:rounded-3xl rounded-lg" />
                    </div>
                </div> */}
                <AboutHome />

                <div className={`flex  flex-col   px-6 ${classLang}`}>
                    <div className="lg:w-1/2 w-full flex justify-center 
                    md:gap-x-12 gap-3">
                        <Link
                            to={`${profilePdfData?.profile_en}`}
                            download="Example-PDF-document"
                            target="_blank"
                            rel="noopener noreferrer"

                        >

                            <button className='rounded-3xl bg-soby-gray-blue-gray md:text-lg sm:text-sm text-[13px] text-white md:px-6 px-3 py-1 md:py-3'

                            >

                                {`${t("Get Soby’s Profile En")}`}
                            </button>
                        </Link>
                        <Link
                            to={`${profilePdfData?.profile_ar}`}
                            download="Example-PDF-document"
                            // target="_blank"
                            rel="noopener noreferrer"

                        >
                            <button className='rounded-3xl bg-soby-gray-blue-gray md:text-lg sm:text-sm  text-[13px] text-white md:px-6 px-3 py-1 md:py-3'

                            >
                                {`${t("Get Soby’s Profile Ar")}`}
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </Spin>
    )
}

export default AboutAbout
