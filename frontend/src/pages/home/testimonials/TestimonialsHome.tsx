import TestimonialCard from "./TestimonialCard"
import { Autoplay, Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import { useEffect, useState } from "react";
import { useGetAllTestimonialsQuery } from "../../../redux/api/homePageApi/TestimonialsHomeApi";
import { Spin } from "antd";
import { ITestimonialsProps } from "../../../models/Testimonilas.model";
import { useGetAllTestimonialsVideosQuery } from "../../../redux/api/homePageApi/testimoialsVideos";
import { t } from "i18next";


const TestimonialsHome = () => {
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const lang = localStorage.getItem("lang")
    const { testimonials, isLoadingData } = useGetAllTestimonialsQuery<{ testimonials: ITestimonialsProps[], isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            testimonials: data?.testimonials ?? [],
            isLoadingData: isLoading
        }),
    });
    const { testimonialsVideos, isLoadingDataVideo } = useGetAllTestimonialsVideosQuery<{ testimonialsVideos: any[], isLoadingDataVideo: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            testimonialsVideos: data?.data ?? [],
            isLoadingDataVideo: isLoading
        }),
    });
    console.log("testimonials:", testimonialsVideos);

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
        <Spin spinning={isLoadingData || isLoadingDataVideo}>
            <div className={`lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 bg-soby-light-1 ${classLang}`}>
                <div className="flex flex-col gap-y-3">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                        {`${t("Voices of Trust:")}`}
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        {`${t("Testimonials")}`}
                    </h3>

                </div>
                <div className="my-12 ">
                    <Swiper
                        modules={[Autoplay, A11y, Navigation]}
                        spaceBetween={20}
                        slidesPerView={windowWidth <= 1024 ? windowWidth <= 757 ? 1 : 2 : 3}
                        autoplay
                    >
                        {testimonials?.map(x => <SwiperSlide key={x?.id}>
                            <TestimonialCard imgSrc={x?.image}
                                name={lang === "en" ? x?.name_en : x?.name_ar}
                                title={lang === "en" ? x?.position_en : x?.position_ar}
                                description={lang === "en" ? x?.content_en : x?.content_ar} />
                        </SwiperSlide>)}
                    </Swiper>

                </div>
                <div className="mt-12 ">
                    <Swiper
                        modules={[Autoplay, A11y, Navigation]}
                        spaceBetween={20}
                        slidesPerView={windowWidth <= 1024 ? windowWidth <= 757 ? 1 : 2 : 3}
                        autoplay

                    >
                        {testimonialsVideos?.map(c => <SwiperSlide key={c.id}>

                            {/* <video controls controlsList=" timeline volume"
                                poster="https://placehold.co/408x286"
                                src={c?.video}
                                className="w-[408px]
                            h-[286px]" /> */}
                            <iframe width="408" height="286" 
                           src={c?.video_link}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>

                            </iframe>
                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </Spin>
    )
}

export default TestimonialsHome