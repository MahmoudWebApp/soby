import logo from "../assets/svg/soby logo.svg";
import MainMenu from "../component/MainMenu";
import SocialMenu from "../component/SocialMenu";

import { t } from "i18next";
import { NavLink } from "react-router-dom";
import DrawerMenu from "../component/DrawerMenu";
import { SobyButton } from "../component/buttons";
const HeaderSoby = () => {
  return (
    <nav className="mx-auto xl:ps-24 xl:pe-11 pe-3 ps-3">
      <div className="flex flex-1 items-center sm:items-stretch justify-between md:justify-around  md:flex-wrap">
        <div className="flex flex-shrink-0 items-center md:justify-center xl:w-auto md:w-full md:mb-5 sm:w-auto">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-32" />
          </NavLink>
        </div>
        <div className="hidden  md:flex xl:gap-x-8 md:gap-x-3 items-center">
          <MainMenu />
        </div>
        <div className="hidden  md:flex sm:gap-x-1 sm:items-center xl:ml-6 md:ml-0">
          <SocialMenu />
        </div>
        <div className="hidden  md:flex justify-start items-center ">
          <SobyButton
            title={`${t("Hire me!")}`}
            bgColor="bg-soby-yellow-light"
            textColor="text-soby-light-1"
          />
        </div>
        <div className="md:hidden sm:block ">
          <DrawerMenu />
        </div>
      </div>
    </nav>
  );
};

export default HeaderSoby;
