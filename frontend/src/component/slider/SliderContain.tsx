import { t } from "i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
interface IProps {
  title: string;
  subTitle: string;
  content: any[];
  link: string;
  brochure: string;
}
const SliderContain: React.FC<IProps> = (props) => {
  const lang = localStorage.getItem("lang")
  const [dir] = useState(localStorage.getItem("lang"));
  const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
  return (
    <div

      className={`flex flex-col  items-start h-full  mt-0  md:justify-start justify-center md:gap-y-5
       xl:gap-y-8 sm:gap-y-3 gap-y-2 w-full ${classLang}  `}
    >
      {/* <div className="px-3 py-1 md:px-10 md:py-3  bg-soby-blue-light-1 rounded-3xl">
        <h3 className="lg:text-base   text-soby-gray-blue-gray font-bold float-left sm:text-xs text-[.6rem]">
          {`${t("Hey! Everyone")}`}
        </h3>
      </div> */}
      <div>
        <h2 className="lg:text-3xl sm:text-lg text-sm text-soby-yellow-light font-bold">
          {props.subTitle}
        </h2>
      </div>
      <div className="md:-mt-6 -mt-2">
        <h2 className="lg:text-6xl sm:text-xl text-md text-soby-gray-blue-gray font-bold ">
          {props.title}
        </h2>
      </div>
      <div className=" sm:mt-0 -mt-2 ">

        <ul className="items-start rtl:flex-end flex-col">
          {props.content?.map((x: any, index: number) => {
            if (index > 0) {
              return <li key={`ab-${index}`}>
                <p className="xl:text-xl  sm:text-xs text-[.5rem]  text-soby-gray-dark-3    ">
                  {lang === "en" ? x.content_en : x?.content_ar}
                </p>
              </li>
            } else {
              <h5 className="xl:text-xl  sm:text-xs text-[.7rem]  text-soby-gray-dark-4 font-extrabold mb-2 word-break">
                {lang === "en" ? x.content_en : x?.content_ar}
              </h5>
            }
          })}

        </ul>
      </div>
      <div className="flex md:flex-row  md:gag-x-3  gap-x-1 md:mt-0 sm:mt-5 mt-2 ">
        <Link
          to={`${props.brochure}`}
          download="Example-PDF-document"
          target="_blank"
          rel="noopener noreferrer"

        >

          <button className='rounded-3xl bg-soby-gray-blue-gray md:text-base sm:text-sm text-[10px] text-white  md:px-6 px-2 md:py-2 py-1'

          >

            {`${t("Brochure")}`}
          </button>
        </Link>
        <Link
          to={`${props.link}`}
          download="Example-PDF-document"
          target="_blank"
          rel="noopener noreferrer"

        >
          <button
            className="md:ms-8 rounded-3xl ms-1 
            md:px-6 px-2 md:py-2 py-1 bg-soby-yellow-dark flex 
          md:text-base sm:text-sm text-[10px]
          text-white
          items-center">


            {`${t("Link")}`}
          </button>
        </Link>
      </div>
      {/* <div className="xl:mt-16 sm:mt-4 mt-1">
        <SendMessageForGiftModal />
      </div> */}
    </div>
  );
};

export default SliderContain;
