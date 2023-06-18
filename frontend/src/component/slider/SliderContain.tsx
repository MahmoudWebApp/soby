import { t } from "i18next";
import videoIcon from '../../assets/svg/icon-video.svg'
import { SobyBigButton } from "../buttons";
import { useState ,useEffect } from "react";

const SliderContain: React.FC<unknown> = () => {
  const [fontFamily, setFontFamily] = useState<string>(localStorage.getItem("lang") === "ar" ? "font-almarai" : "font-roboto");
  const [dir, setDir] = useState(localStorage.getItem("lang") === "ar" ? "rtl" : "ltr")
  useEffect(() => {
    setFontFamily(localStorage.getItem("lang") === "ar" ? "font-almarai" : "font-roboto");
    setDir(localStorage.getItem("lang") === "ar" ? "rtl" : "ltr")

  }, [])
  console.log("Font",fontFamily);
  
  return (
    <div
      dir={dir}
      className={`flex flex-col  items-start md:gap-y-5 xl:gap-y-8 gap-y-3 w-full  ${fontFamily} animate-[spinner-grow_2s_ease-in-out]`}
    >
      <div className="px-3 py-1 md:px-10 md:py-3 bg-soby-blue-light-1 rounded-3xl">
        <h3 className="md:text-base text-soby-gray-blue-gray font-bold float-left text-xs">
          {`${t("Hey! Everyone")}`}
        </h3>
      </div>
      <div>
        <h2 className="md:text-4xl text-lg text-soby-yellow-light font-bold">
          {`${t("My name is")}`}
        </h2>
      </div>
      <div className="md:-mt-6 -mt-3">
        <h2 className="md:text-7xl text-2xl text-soby-gray-blue-gray font-bold ">
          {`${t("Soby Akbik")}`}
        </h2>
      </div>
      <div className="mt-6   md:block hidden">
        <h5 className="xl:text-xl  text-xs  text-soby-gray-dark-4 font-extrabold mb-2 word-break">
          {`${t(
            "I help managers, entrepreneurs, and intellectual leaders with:"
          )}`}
        </h5>
        <ul className="items-start rtl:flex-end flex-col">
          <li>
            <p className="xl:text-xl  text-xs  text-soby-gray-dark-3 before:content-['•'] before:mx-1 ">
              {`${t("Building and marketing their personal brands")}`}
            </p>
          </li>
          <li>
            <p className="xl:text-xl  text-xs  text-soby-gray-dark-3 before:content-['•'] before:mx-1 ">
              {`${t(
                "Accelerating the marketing of their products and doubling their sales"
              )}`}
            </p>
          </li>
          <li>
            <p className="xl:text-xl  text-xs  text-soby-gray-dark-3 before:content-['•'] before:mx-1 ">
              {`${t("Discovering and nurturing talents")}`}
            </p>
          </li>
          <li>
            <p className="xl:text-xl  text-xs  text-soby-gray-dark-3 before:content-['•'] before:mx-1">
              {`${t("Creative thinking and organizational agility")}`}
            </p>
          </li>
          <li>
            <p className="xl:text-xl  text-xs  text-soby-gray-dark-3 before:content-['•'] before:mx-1">
              {`${t("Collecting their debts without losing their customers")}`}
            </p>
          </li>
        </ul>
      </div>
      <div className="flex md:flex-row  md:gag-x-3  gap-x-1 md:mt-0 mt-5 ">
        <SobyBigButton
          title={`${t("View Profile")}`}
          bgColor="bg-soby-gray-blue-gray"
          textColor="text-soby-light-1"
        />
        <button className="md:ms-8  ms-1 flex flex-row md:gag-x-3  gap-x-1 items-center">
          <img
            src={videoIcon}
            alt="video-icon"
            width={30}
            className="animate-spin"
          />
          <span className="hidden md:block md:ms-3 ms-1 md:text-base text-xs font-semibold text-soby-dark-1">{`${t(
            "Watch Videos"
          )}`}</span>
        </button>
      </div>
      <div className="xl:mt-16 mt-4">
        <SobyBigButton
          title={`${t("Claim Your Thank-You Gift")}`}
          bgColor="bg-soby-yellow-light"
          textColor="text-soby-light-1"
        />
      </div>
    </div>
  );
};

export default SliderContain;
