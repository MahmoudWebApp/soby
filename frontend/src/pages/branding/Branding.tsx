import Consultation from "../home/consultation/consultation"
import TestimonialsHome from "../home/testimonials/TestimonialsHome"
import CompaniesBrand from "./CompaniensBrand"
import LandingPage from "./LandingPage"
import StroyBrand from "./StoryBrand"
import ContentLessonsBrand from "./contentLessonsBrand/ContentLessonsBrand"
import InvestmentBrand from "./investmentBrand/InvestmentBrand"
import StepsBrand from "./stepsBrand/StepsBrand"
import SufferBrand from "./sufferBrand/SufferBrand"
import TrainersBrand from "./trainersBrand/TrainersBrand"

const Branding = () => {
    return (
        <>
            <LandingPage />
            <StroyBrand />
            <SufferBrand />
            <StepsBrand />
            <TestimonialsHome />
            <CompaniesBrand />
            <TrainersBrand />
            <ContentLessonsBrand />
            <Consultation />
            <InvestmentBrand />
        </>
    )
}

export default Branding