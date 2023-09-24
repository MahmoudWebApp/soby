
import { mainSliderData } from "../AllData";
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import { ISliderHeroProps } from "../../models/SliderHero.model";
import { useGetAllSlidesQuery } from "../../redux/api/homePageApi/sliderHomeApi";
import { Spin } from "antd";


const MainSlider = () => {
    const { slides, isLoadingData } = useGetAllSlidesQuery<{ slides: ISliderHeroProps[], isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            slides: data?.heros ?? [],
            isLoadingData: isLoading
        }),
    });
    console.log(slides);

    return (
        <Spin spinning={isLoadingData}>
            <Swiper
                modules={[Autoplay, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {mainSliderData?.map((s => <SwiperSlide key={s.key}>
                    <div className=" h-auto w-full md:mt-[96px] mt-[70px]  lg:min-h-[952px]  min-h-fit "
                        style={{
                            backgroundImage: `url(${s.imgSrc}) `, backgroundSize: "cover", backgroundPosition: "center center",
                        }}>
                        {/* <img src={s.imgSrc} alt="slid1" className="h-auto min-h-full w-full object-cover " /> */}
                        <span className=" grid h-full w-1/2  place-items-center lg:pl-24 pl-6 mr-auto pt-12">
                            {s.sliderContent}
                        </span>

                    </div></SwiperSlide>))}
            </Swiper>
        </Spin>

    );
};

export default MainSlider;