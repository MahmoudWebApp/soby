import { t } from "i18next";
import videoIcon from '../../assets/svg/icon-video.svg'
import { SobyBigButton } from "../buttons";

const SliderContain: React.FC<unknown> = () => {
  return (
    <div
     
      className={`flex flex-col  items-start md:gap-y-5 xl:gap-y-8 sm:gap-y-3 gap-y-2 w-full   animate-[spinner-grow_2s_ease-in-out]`}
    >
      <div className="px-3 py-1 md:px-10 md:py-3  bg-soby-blue-light-1 rounded-3xl">
        <h3 className="lg:text-base   text-soby-gray-blue-gray font-bold float-left sm:text-xs text-[.6rem]">
          {`${t("Hey! Everyone")}`}
        </h3>
      </div>
      <div>
        <h2 className="lg:text-4xl sm:text-lg text-sm text-soby-yellow-light font-bold">
          {`${t("My name is")}`}
        </h2>
      </div>
      <div className="md:-mt-6 -mt-3">
        <h2 className="lg:text-7xl sm:text-2xl text-xl text-soby-gray-blue-gray font-bold ">
          {`${t("Soby Akbik")}`}
        </h2>
      </div>
      <div className="lg:mt-6 sm:mt-0 -mt-2 ">
        <h5 className="xl:text-xl  sm:text-xs text-[.7rem]  text-soby-gray-dark-4 font-extrabold mb-2 word-break">
          {`${t(
            "I help managers, entrepreneurs, and intellectual leaders with:"
          )}`}
        </h5>
        <ul className="items-start rtl:flex-end flex-col">
          <li>
            <p className="xl:text-xl  sm:text-xs text-[.5rem]  text-soby-gray-dark-3  ">
              {`${t("Building and marketing their personal brands")}`}
            </p>
          </li>
          <li>
            <p className="xl:text-xl  sm:text-xs text-[.5rem]  text-soby-gray-dark-3  ">
              {`${t(
                "Accelerating the marketing of their products and doubling their sales"
              )}`}
            </p>
          </li>
          <li>
            <p className="xl:text-xl  sm:text-xs text-[.5rem]   text-soby-gray-dark-3  ">
              {`${t("Discovering and nurturing talents")}`}
            </p>
          </li>
          <li>
            <p className="xl:text-xl  sm:text-xs text-[.5rem]   text-soby-gray-dark-3 ">
              {`${t("Creative thinking and organizational agility")}`}
            </p>
          </li>
          <li>
            <p className="xl:text-xl  sm:text-xs text-[.5rem]  text-soby-gray-dark-3 ">
              {`${t("Collecting their debts without losing their customers")}`}
            </p>
          </li>
        </ul>
      </div>
      <div className="flex md:flex-row  md:gag-x-3  gap-x-1 md:mt-0 sm:mt-5 mt-2 ">
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
      <div className="xl:mt-16 sm:mt-4 mt-1">
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
