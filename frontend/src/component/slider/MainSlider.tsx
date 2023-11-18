
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import { ISliderHeroProps } from "../../models/SliderHero.model";
import { useGetAllSlidesQuery } from "../../redux/api/homePageApi/sliderHomeApi";
import { Spin } from "antd";
import SlideOne from "./SlideOne";
import SliderContain from './SliderContain';


const MainSlider = () => {
    const lang = localStorage.getItem("lang")
    const { slides, isLoadingData } =
        useGetAllSlidesQuery<{ slides: ISliderHeroProps[], isLoadingData: boolean }>(undefined, {
            selectFromResult: ({ data, isLoading }) => ({
                slides: data?.heros ?? [],
                isLoadingData: isLoading
            }),
        });
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
                {slides?.map((s => {
                    if (s.slide_number === 1) {
                        return <SwiperSlide key={`slid_${s.id}`} className='
                        lg:h-[700px] md:h-[600px]  
                        flex md:flex-row flex-col-reverse	 gap-x-3 
                        md:mt-[96px] mt-[70px] 
                          
                        gap-y-1
                        bg-white'>

                            <div className="flex flex-col  md:h-full
                             lg:pl-24 p-8 mr-auto xl:pt-12 pt-0 md:mt-12 -mt-4
                             h-[250px]
                             md:w-[48%] w-full
                        
                           
                            ">
                                <SlideOne
                                    title={lang === "en" ? s?.title_en : s?.title_ar}
                                    subTitle={lang === "en" ? s?.subtitle_en : s?.subtitle_ar}
                                    content={s?.content ?? []}
                                    profileLink={s?.profile_link}
                                    videoLink={s?.videos_link}
                                />
                            </div>
                            <div className=' lg:h-[700px] md:h-[600px]   h-[200px]  md:w-[48%] w-full' style={{
                                backgroundImage: `url(${s.image}) `,
                                backgroundSize: "100% 100%",
                                backgroundPosition: "center center",
                            }}>

                            </div>


                        </SwiperSlide>
                    } else {
                        return <SwiperSlide key={`slid_${s.id}`}
                            className='lg:h-[700px] md:h-[600px]  
                            
                        flex md:flex-row flex-col-reverse	 gap-x-3 
                        md:mt-[96px] mt-[70px] 
                        gap-y-1
                        bg-white   w-full' >
                            {/* <div className=" 
                           
                            lg:h-[760px] md:h-[600px] sm:h-[500px] h-[400px]  w-full md:mt-[96px] mt-[70px]   min-h-fit "
                            // style={{
                            //     backgroundImage: `url(${s.image}) `,
                            //     backgroundSize: "100% 100%",
                            //     backgroundPosition: "center center",
                            // }}
                            > */}


                            {/* </div> */}
                            <div className="flex flex-col  md:h-full
                             lg:pl-24 p-8 mr-auto xl:pt-12 pt-0 md:mt-12 -mt-4
                             h-[250px]
                             md:w-[48%] w-full
                             
                           
                            ">

                                <SliderContain
                                    title={lang === "en" ? s.title_en : s.title_ar}
                                    subTitle={lang === "en" ? s.subtitle_en : s.subtitle_ar}
                                    content={s.content ?? []}
                                    link={s?.link}
                                    brochure={s?.brochure} />
                            </div>
                            <div className=' lg:h-[700px] md:h-[600px]  h-[200px]  md:w-[48%] w-full' style={{
                                backgroundImage: `url(${s.image}) `,
                                backgroundSize: "100% 100%",
                                backgroundPosition: "center center",
                            }}>

                            </div>
                        </SwiperSlide>
                    }
                }

                ))}
            </Swiper>
        </Spin>

    );
};

export default MainSlider;