import logo from "../assets/svg/soby logo.svg";
import MainMenu from "../component/MainMenu";
// import SocialMenu from "../component/SocialMenu";

import { t } from "i18next";
import { NavLink } from "react-router-dom";
import DrawerMenu from "../component/DrawerMenu";
import { SobyButton } from "../component/buttons";
import LangSwitcher from "../component/LangSwitcher";
const HeaderSoby = () => {
 
  return (
    <nav className="mx-auto xl:px-24 px-6 md:py-6 py-2 fixed bg-white shadow-sm z-[999] left-0 top-0 right-0">
      <div className="flex flex-1 items-center sm:items-stretch justify-between md:justify-around  md:flex-wrap">
        <div className="flex ">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-32" />
          </NavLink>
        </div>
        <div className="hidden  lg:flex xl:gap-x-6 md:gap-x-3 items-center">
          <MainMenu classesText={"xl:text-base  md:text-sm text-lg"} />
          <LangSwitcher />
        </div>
        {/* <div className="hidden  md:flex sm:gap-x-1 sm:items-center xl:ml-6 md:ml-0">
          <SocialMenu colorIcon={"blue"} />
        </div> */}
        <div className="hidden  md:flex justify-start items-center ">
          <SobyButton
            title={`${t("Schedule Your Insight")}`}
            bgColor="bg-soby-yellow-light"
            textColor="text-soby-light-1"
          />
        </div>
        <div className="lg:hidden md:block ">
          <DrawerMenu />
        </div>
      </div>
    </nav>
  );
};

export default HeaderSoby;
