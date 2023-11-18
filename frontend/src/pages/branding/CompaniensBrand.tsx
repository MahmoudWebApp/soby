import { Autoplay, Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { useGetAllCompaniesQuery } from '../../redux/api/homePageApi/companiesHomeApi';


const CompaniesBrand = () => {
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
            <div className="flex flex-col  gap-12  lg:pb-[80px] md:pb-[60px] pb-[40px] lg:px-28 px-6 bg-white">

                <div className="">
                    <Swiper
                        modules={[Autoplay, A11y, Navigation]}
                        spaceBetween={20}
                        slidesPerView={windowWidth <= 1024 ? windowWidth <= 757 ? 2 : 4 : 6}
                        // navigation
                        autoplay

                    >
                        {companies?.map(x => <SwiperSlide key={`company_${x.id}`}>
                            <img src={x?.image} className='w-[132px] h-[133px]' />
                        </SwiperSlide>)}
                    </Swiper>

                </div>
            </div>
        </Spin>

    )
}

export default CompaniesBrand