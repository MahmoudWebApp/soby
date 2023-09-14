import "./App.css";

import Router from "./router/Router";

import { useState } from "react";

import { FooterSoby, HeaderSoby } from "./layout";


function App() {
  const [dir] = useState(localStorage.getItem("lang"));

  const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
  return (
    <div className="relative bg-soby-light-2">
      <div
        dir={dir === "ar" ? "rtl" : "ltr"}
        className={`${classLang}  bg-soby-light-2`}
      >
        <Router />
      </div>
    </div>
  );
}

export default App;

