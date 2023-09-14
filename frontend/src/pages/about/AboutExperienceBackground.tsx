import { t } from "i18next";
import { Autoplay, Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import { useEffect, useState } from "react";
const AboutExperienceBackground = () => {
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
    const testimonialsVideos: any[] = [
        { id: 'v-1', videoSrc: "" },
        { id: 'v-1', videoSrc: "" },
        { id: 'v-1', videoSrc: "" },
        { id: 'v-1', videoSrc: "" },
        { id: 'v-1', videoSrc: "" },

    ]
    return (
        <div className="flex md:flex-row  lg:gap-12 gap-6 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6">

            <div className="flex flex-col gap-y-3 w-full">
                <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                    Experience
                </h4>
                <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                    Background
                </h3>
                <div className="my-12 ">
                    <Swiper
                        modules={[Autoplay, A11y, Navigation]}
                        spaceBetween={20}
                        slidesPerView={windowWidth <= 1024 ? windowWidth <= 757 ? 1 : 2 : 4}
                        autoplay

                    >
                        {testimonialsVideos?.map(c => <SwiperSlide key={c.key}>

                            <img
                                src={c.videoSrc===''?"https://placehold.co/291x250":c.videoSrc}
                                className="w-[291px]
                            h-[250px]" />
                        </SwiperSlide>)}
                    </Swiper>
                </div>
                <div className="flex  justify-between md:flex-nowrap flex-wrap gap-y-6" >
                    <div className="md:w-1/2 w-full">
                        <ul className="items-start rtl:flex-end flex-col">
                            <li>
                                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3   ">
                                    {`${t("Building and marketing their personal brands")}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3  ">
                                    {`${t(
                                        "Accelerating the marketing of their products and doubling their sales"
                                    )}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3   ">
                                    {`${t("Discovering and nurturing talents")}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3 ">
                                    {`${t("Creative thinking and organizational agility")}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3  ">
                                    {`${t("Collecting their debts without losing their customers")}`}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <ul className="items-start rtl:flex-end flex-col">
                            <li>
                                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3   ">
                                    {`${t("Building and marketing their personal brands")}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3  ">
                                    {`${t(
                                        "Accelerating the marketing of their products and doubling their sales"
                                    )}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3   ">
                                    {`${t("Discovering and nurturing talents")}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3 ">
                                    {`${t("Creative thinking and organizational agility")}`}
                                </p>
                            </li>
                            <li>
                                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3  ">
                                    {`${t("Collecting their debts without losing their customers")}`}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutExperienceBackground