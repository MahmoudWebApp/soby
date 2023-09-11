
import { mainSliderData } from "../AllData";
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/a11y';


const MainSlider = () => {

    return (

        <Swiper
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            {mainSliderData?.map((s => <SwiperSlide key={s.key}>
                <div className=" h-auto w-full lg:py-[100px] md:py-[60px] py-[30px] lg:min-h-[952px]  min-h-fit "
                    style={{ backgroundImage: `url(${s.imgSrc}) ` ,backgroundSize:"cover" , backgroundPosition:"center center",
                    }}>
                    {/* <img src={s.imgSrc} alt="slid1" className="h-auto min-h-full w-full object-cover " /> */}
                    <span className=" grid h-full w-1/2  place-items-center lg:pl-24 pl-6">
                        {s.sliderContent}
                    </span>

                </div></SwiperSlide>))}
        </Swiper>
    );
};

export default MainSlider;