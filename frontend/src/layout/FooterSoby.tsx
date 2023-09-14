
import { NavLink } from "react-router-dom";
import logo from "../assets/svg/soby logo.svg";
import MainMenu from "../component/MainMenu";
import SocialMenu from "../component/SocialMenu";
import MainFooterMenu from "../component/MainFooterMenu";
const FooterSoby = () => {
    return (
        <div className="grid grid-row-2">
            <div className='bg-soby-gray-dark-1  lg:px-28 px-6 '>
                <div className="grid xl:grid-cols-3  lg:gap-44 md:gap-12 gap-6 md:grid-cols-2 grid-cols-1 py-12">
                    <div className="flex flex-col gap-y-3">
                        <NavLink to="/">
                            <img src={logo} alt="logo" className="w-32" />
                        </NavLink>
                        <div>
                            <p className="text-soby-gray-blue-gray text-base ">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h4 className="text-soby-yellow-light text-2xl font-semibold">
                            QUICK LINKS
                        </h4>
                        <div className=" flex flex-col gap-y-3">
                            <MainFooterMenu classesText={"text-lg"} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h4 className="text-soby-yellow-light text-2xl font-semibold">
                            CONTACT US
                        </h4>
                        <div className="flex flex-col gap-y-3 text-soby-gray-blue-gray text-lg">
                            <p>Phone: ‭+971 52 994 5335‬</p>
                            <p>hi@asksoby.com</p>
                            <p>Address: United Arabi Emirates, Dubai</p>

                        </div>
                        <div className=" flex gap-x-1 items-center md:mt-6 mt-3">
                            <SocialMenu colorIcon={"yellow"} />
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-soby-gray-blue-gray xl:px-[80px] lg:px-28 px-6 py-8  flex items-center justify-end'>

                <div className="flex md:flex-row flex-col justify-between lg:w-2/3 w-full">
                    <div className=" lg:text-2xl text-xl text-white ">
                        SOBY© 2023 COPYRIGHT
                    </div>
                    <div className="lg:text-xl text-lg text-white">Privacy Policy</div>
                </div>
            </div>
        </div>
    )
}

export default FooterSoby