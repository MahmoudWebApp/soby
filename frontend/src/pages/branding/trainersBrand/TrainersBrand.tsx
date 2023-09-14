


import testImage from "../../../assets/img/testimonial-1.png"
import { Autoplay, Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import { useEffect, useState } from "react";
import TrainerCard from "./TrarinerCard";


const TrainersBrand = () => {
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
    const trainersData: any[] = [
        { id: 't-1', name: "Sarah Collin", title: "position",profileUrl:"", imgSr: testImage, description: "After a day at Giraffe, I recognize that my little Angel - Jolie is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before." },
        { id: 't-2', name: "Sarah Collin", title: "position",profileUrl:"", imgSr: testImage, description: "After a day at Giraffe, I recognize that my little Angel - Jolie is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before." },
        { id: 't-3', name: "Sarah Collin", title: "position",profileUrl:"", imgSr: testImage, description: "After a day at Giraffe, I recognize that my little Angel - Jolie is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before." },
        { id: 't-4', name: "Sarah Collin", title: "position",profileUrl:"", imgSr: testImage, description: "After a day at Giraffe, I recognize that my little Angel - Jolie is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before." },
        { id: 't-5', name: "Sarah Collin", title: "position",profileUrl:"", imgSr: testImage, description: "After a day at Giraffe, I recognize that my little Angel - Jolie is more and more confident and creative. She loves to raise her voice anytime with her wonder which hardly happen before." }
    ]
 

    return (
        <div className=" lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 bg-soby-light-1">
            <div className="flex flex-col gap-y-3">
                <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                Meet the
                </h4>
                <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                Trainers
                </h3>

            </div>
            <div className="my-12 ">
                <Swiper
                    modules={[Autoplay, A11y, Navigation]}
                    spaceBetween={40}
                    slidesPerView={ windowWidth <= 757 ? 1 : 2 }
                    autoplay
                >
                    {trainersData?.map(x => <SwiperSlide key={x.key}>
                        <TrainerCard imgSrc={x.imgSr} name={x.name} title={x.title} description={x.description} key={x.id} profileUrl={"x.profileUrl"} />
                    </SwiperSlide>)}
                </Swiper>

            </div>
          
        </div>
    )
}

export default TrainersBrand