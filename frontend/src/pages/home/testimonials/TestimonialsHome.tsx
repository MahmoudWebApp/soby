import TestimonialCard from "./TestimonialCard"
import testImage from "../../../assets/img/testimonial-1.png"
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


const TestimonialsHome = () => {
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
    console.log(testimonials, testimonialsVideos);

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
    const testimonialsData: any[] = [
        { id: 't-1', name: "Sarah Collin", title: "position", imgSr: testImage, description: "After a day at Giraffe, I recognize that my little Angel - Jolie is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before." },
        { id: 't-2', name: "Sarah Collin", title: "position", imgSr: testImage, description: "After a day at Giraffe, I recognize that my little Angel - Jolie is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before." },
        { id: 't-3', name: "Sarah Collin", title: "position", imgSr: testImage, description: "After a day at Giraffe, I recognize that my little Angel - Jolie is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before." },
        { id: 't-4', name: "Sarah Collin", title: "position", imgSr: testImage, description: "After a day at Giraffe, I recognize that my little Angel - Jolie is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before." },
        { id: 't-5', name: "Sarah Collin", title: "position", imgSr: testImage, description: "After a day at Giraffe, I recognize that my little Angel - Jolie is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before." }
    ]
    const testimonialsVideosDemo: any[] = [
        { id: 'v-1', videoSrc: "" },
        { id: 'v-1', videoSrc: "" },
        { id: 'v-1', videoSrc: "" },
        { id: 'v-1', videoSrc: "" },
        { id: 'v-1', videoSrc: "" },

    ]

    return (
        <Spin spinning={isLoadingData || isLoadingDataVideo}>
            <div className=" lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 bg-soby-light-1">
                <div className="flex flex-col gap-y-3">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                        Don’t hear only from us
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        Testimonials
                    </h3>

                </div>
                <div className="my-12 ">
                    <Swiper
                        modules={[Autoplay, A11y, Navigation]}
                        spaceBetween={20}
                        slidesPerView={windowWidth <= 1024 ? windowWidth <= 757 ? 1 : 2 : 3}
                        autoplay
                    >
                        {testimonialsData?.map(x => <SwiperSlide key={x.key}>
                            <TestimonialCard imgSrc={x.imgSr} name={x.name} title={x.title} description={x.description} key={x.id} />
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
                        {testimonialsVideosDemo?.map(c => <SwiperSlide key={c.key}>

                            <video controls controlsList=" timeline volume"
                                poster="https://placehold.co/408x286"
                                src={c.videoSrc}
                                className="w-[408px]
                            h-[286px]" />
                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </Spin>
    )
}

export default TestimonialsHome