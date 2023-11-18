import { Autoplay, Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import { useEffect, useState } from "react";
import TrainerCard from "./TrarinerCard";
import { useGetAllTrainersQuery } from "../../../redux/api/brandingPageApi/trainersBrandingApi";
import { Spin } from "antd";
import { t } from "i18next";


const TrainersBrand = () => {
    const lang = localStorage.getItem("lang")
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const { trainers, isLoadingData } = useGetAllTrainersQuery<{ trainers: any[], isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            trainers: data?.data ?? [],
            isLoadingData: isLoading
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
    });

    return (
        <Spin spinning={isLoadingData}>
            <div className={`lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 bg-soby-light-1 ${classLang}`}>
                <div className="flex flex-col gap-y-3">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                        {`${t("Meet the")}`}
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        {`${t("Trainers")}`}
                    </h3>

                </div>
                <div className="my-12 ">
                    <Swiper
                        modules={[Autoplay, A11y, Navigation]}
                        spaceBetween={40}
                        slidesPerView={windowWidth <= 757 ? 1 : 2}
                        autoplay
                    >
                        {trainers?.map(x => <SwiperSlide key={`trainer_${x.id}`}>
                            <TrainerCard
                                imgSrc={x?.image}
                                name={lang === "en" ? x?.name_en : x?.name_ar}
                                title={lang === "en" ? x?.position_en : x?.position_ar}
                                description={lang === "en" ? x?.content_en : x?.content_ar}
                                profileUrl={x?.link}
                            />
                        </SwiperSlide>)}
                    </Swiper>

                </div>

            </div>
        </Spin>

    )
}

export default TrainersBrand