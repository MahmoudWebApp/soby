import { Autoplay, Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import { useEffect, useState } from 'react';
import { useGetAllCompaniesQuery } from '../../../redux/api/homePageApi/companiesHomeApi';
import { Spin } from 'antd';
import { t } from 'i18next';


const Companies = () => {
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const { companies, isLoadingData } = useGetAllCompaniesQuery<{ companies: any[], isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            companies: data?.companies ?? [],
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


            <div className={`flex flex-col  gap-12  lg:py-[80px] md:py-[60px] py-[20px] lg:px-28 px-6 bg-white ${classLang}`}>
                <div className="flex flex-col gap-y-3">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl   font-semibold">
                        {`${t("Empowered")}`}
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        {`${t("Clients")}`}
                    </h3>

                </div>
                <div className="lg:mt-12 md:mt-6 mt-3">
                    <Swiper
                        modules={[Autoplay, A11y, Navigation]}
                        spaceBetween={20}
                        slidesPerView={windowWidth <= 1024 ? windowWidth <= 757 ? 2 : 4 : 6}
                        // navigation
                        autoplay

                    >
                        {companies?.map(x => <SwiperSlide key={x.id}>
                            <img src={x?.image} className='w-[132px] h-[133px]' />
                        </SwiperSlide>)}
                    </Swiper>

                </div>
            </div>
        </Spin>

    )
}

export default Companies