import imageDemo from "../../assets/img/soby-slider-white.png"
import { SobyBigButton } from "../../component/buttons"

const LandingPage = () => {

    return (
        <div className=" h-auto w-full md:mt-[96px] mt-[70px]  lg:min-h-screen  min-h-fit flex flex-col justify-center  "
            style={{
                backgroundImage: `url(${imageDemo}) `, backgroundSize: "cover", backgroundPosition: "center center",
            }}>
            <span className="  h-full w-1/2 items-center lg:pl-24 pl-6 mr-auto ">
                <div

                    className={`flex flex-col  items-start md:gap-y-5 xl:gap-y-8 sm:gap-y-3 gap-y-2 w-full   animate-[spinner-grow_2s_ease-in-out]`}
                >

                    <div>
                        <h2 className="lg:text-4xl sm:text-lg text-sm text-soby-yellow-light font-bold">
                            Unlock the Power of
                        </h2>
                    </div>
                    <div className="md:-mt-6 -mt-3">
                        <h2 className="lg:text-7xl sm:text-2xl text-xl text-soby-gray-blue-gray font-bold ">
                            Your Personal Brand
                        </h2>
                    </div>
                    <div className="lg:mt-6 sm:mt-0 -mt-2 ">

                        <p className="xl:text-xl  sm:text-xs text-[.5rem]  text-soby-gray-dark-3  ">
                            Discover how strong your personal brand really is and take it to the next level. Click here to evaluate your Personal Brand now
                        </p>



                    </div>
                    <div className="xl:mt-16 sm:mt-4 mt-1 flex md:flex-row flex-col justify-center gap-6">

                        <SobyBigButton
                            title={"Download Brochure"}
                            bgColor="bg-soby-yellow-light"
                            textColor="text-soby-light-1"
                        />
                        <SobyBigButton
                            title={"Link"}
                            bgColor="bg-soby-yellow-light"
                            textColor="text-soby-light-1"
                        />
                    </div>
                </div>
            </span>

        </div>
    )
}

export default LandingPage