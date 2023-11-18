import { t } from "i18next";
import { Autoplay, Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import { useEffect, useState } from "react";
import { useGetAllExperiencesTextsQuery } from "../../redux/api/aboutPageApi/experiencesAboutApi";
import { Spin } from "antd";
const AboutExperienceBackground = () => {
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const { experiencesData, isLoadingData } =
        useGetAllExperiencesTextsQuery<{ experiencesData: any, isLoadingData: boolean }>(undefined, {
            selectFromResult: ({ data, isLoading }) => ({
                isLoadingData: isLoading,
                experiencesData: data,
            }),
        });
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    })

    return (
        <Spin spinning={isLoadingData}>
            <div className={`flex md:flex-row  lg:gap-12 gap-6 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 ${classLang}`}>

                <div className="flex flex-col gap-y-3 w-full">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                        {`${t("Professional")}`}
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        {`${t("Path")}`}
                    </h3>
                    <div className="my-12 ">
                        <Swiper
                            modules={[Autoplay, A11y, Navigation]}
                            spaceBetween={20}
                            slidesPerView={windowWidth <= 1024 ? windowWidth <= 757 ? 1 : 2 : 4}
                            autoplay

                        >
                            {experiencesData?.images?.map((c: any) => <SwiperSlide key={`ex-image_${c?.id}`}>

                                <img
                                    src={c?.image === '' ? "https://placehold.co/291x250" : c?.image}
                                    className="w-[291px]
                            h-[250px]" />
                            </SwiperSlide>)}
                        </Swiper>
                    </div>
                    <div className="flex  justify-between md:flex-nowrap flex-wrap gap-y-6" >
                        <div className="md:w-1/2 w-full">

                            <ul className="items-start rtl:flex-end flex-col">
                                {experiencesData?.experience?.content_one?.map((c: any, index: number) =>
                                    <li key={`ex_${index}`}>
                                        <p className="xl:text-lg  text-xs  text-soby-gray-dark-3   ">
                                            {dir === "en" ? c?.content_en : c?.content_ar}
                                        </p>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <ul className="items-start rtl:flex-end flex-col">
                                {experiencesData?.experience?.content_two?.map((c: any, index: number) =>
                                    <li key={`ex_${index}`}>
                                        <p className="xl:text-lg  text-xs  text-soby-gray-dark-3   ">
                                            {dir === "en" ? c?.content_en : c?.content_ar}
                                        </p>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </Spin>
    )
}

export default AboutExperienceBackground