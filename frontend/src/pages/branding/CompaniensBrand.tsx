import { Autoplay, Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import iconComany from '../../assets/img/company-logo.png'
import { useEffect, useState } from 'react';


const CompaniesBrand = () => {
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
    const companiesData: any[] = [
        { id: "c_1", icon: iconComany },
        { id: "c_2", icon: iconComany },
        { id: "c_3", icon: iconComany },
        { id: "c_4", icon: iconComany },
        { id: "c_5", icon: iconComany },
        { id: "c_6", icon: iconComany },
        { id: "c_7", icon: iconComany },
        { id: "c_8", icon: iconComany },
    ]
    return (
        <div className="flex flex-col  gap-12  lg:pb-[80px] md:pb-[60px] pb-[40px] lg:px-28 px-6 bg-white">
           
            <div className="">
                <Swiper
                    modules={[Autoplay, A11y, Navigation]}
                    spaceBetween={20}
                    slidesPerView={windowWidth <= 1024 ? windowWidth <= 757 ? 2 : 4 : 6}
                    // navigation
                    autoplay

                >
                    {companiesData?.map(x => <SwiperSlide key={x.id}>
                        <img src={x.icon} className='w-[132px] h-[133px]' />
                    </SwiperSlide>)}
                </Swiper>

            </div>
        </div>

    )
}

export default CompaniesBrand