
import MainSlider from "../../component/slider/MainSlider";
import Networks from "./networks/Networks";
import AboutHome from "./AboutHome";
import BannerHome from "./BannerHome";
import Companies from "./companies/Companies";
import TestimonialsHome from "./testimonials/TestimonialsHome";
import Consultation from "./consultation/consultation";
import { InlineWidget } from "react-calendly";


const Home = () => {
  return (
    <div>
      <MainSlider />
      <AboutHome />
      <TestimonialsHome />
      <BannerHome />
      <Companies />
      <Networks />
      <Consultation/>
      <InlineWidget url="https://calendly.com/asksoby/45min" />
    </div>
  );
};

export default Home;