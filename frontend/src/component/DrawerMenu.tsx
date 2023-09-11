import { useState } from "react";
import { Button, Drawer } from "antd";
import { NavLink } from "react-router-dom";

import logo from "../assets/svg/soby logo.svg";
import menuIcon from "../assets/svg/menu.svg";
import MainMenu from "./MainMenu";
import SocialMenu from "./SocialMenu";
import LangSwitcher from "./LangSwitcher";
const DrawerMenu = () => {
  const [open, setOpen] = useState(false);


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="link" onClick={showDrawer}>
        <img src={menuIcon} alt="menu" className="w-12" />
      </Button>
      <Drawer
        title={
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-32 " />
          </NavLink>
        }
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="flex gap-y-2 items-center flex-col">
          <MainMenu classesText={"xl:text-base  md:text-sm text-lg"} />
          <div className="mt-3 p-3" style={{borderTop:"1px solid #1A2442"}}>
          <LangSwitcher />
          </div>
         

        </div>
        <div className="flex gap-y-3  items-center flex-wrap px-10 mt-20">
          <SocialMenu colorIcon={"blue"} />
        </div>
      </Drawer>
    </>
  );
};
export default DrawerMenu;
