import "./App.css";

import Router from "./router/Router";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Space, Switch } from "antd";
import { HeaderSoby } from "./layout";
import { Select, Option } from "@material-tailwind/react";

function App() {
  const [dir, setDir] = useState(localStorage.getItem("lang"));
  const { i18n } = useTranslation();
  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
    localStorage.setItem("lang", value);
    setDir(value);
    window.location.reload();

  };
  const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
  return (
    <div className="relative bg-soby-light-2">

      <div className="absolute top-0 left-3 md:left-20 z-50 w-20">
        <Select  onChange={(value: string) => changeLanguage(value)} value={localStorage.getItem("lang") ?? undefined}>
          <Option value="en">English</Option>
          <Option value="ar">عربي</Option>
        </Select>
      </div>
      <div
        dir={dir === "ar" ? "rtl" : "ltr"}
        className={`${classLang} md:pt-10 pt-8 bg-soby-light-2`}
      >
        <HeaderSoby />
        <div className=" min-h-screen   xl:ms-24 xl:me-11 me-3 ms-3 ">
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;

