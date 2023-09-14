import { t } from "i18next"
import demoIcon from "../../assets/svg/book-dark-icon.svg";
import "video-react/dist/video-react.css";
const Publications = () => {
  return (

    <div className=" lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6  md:mt-[96px] mt-[70px]  ">
      <div className="grid grid-row-2">
        <div className="flex items-center gap-12 md:flex-nowrap flex-wrap ">
          <div className=" flex justify-center md:w-1/6 w-full">
            <img src={demoIcon} alt="" className='h-[211px] w-[190px] ]' />
          </div>
          <div className="flex flex-col gap-y-3 md:w-3/6 w-full">
            <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
              Book Title
            </h4>
            <ul className="items-start rtl:flex-end flex-col">
              <li>
                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3   ">
                  {`${t("Building and marketing their personal brands")}`}
                </p>
              </li>
              <li>
                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3  ">
                  {`${t(
                    "Accelerating the marketing of their products and doubling their sales"
                  )}`}
                </p>
              </li>
              <li>
                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3   ">
                  {`${t("Discovering and nurturing talents")}`}
                </p>
              </li>
              <li>
                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3 ">
                  {`${t("Creative thinking and organizational agility")}`}
                </p>
              </li>
              <li>
                <p className="xl:text-lg  text-xs  text-soby-gray-dark-3  ">
                  {`${t("Collecting their debts without losing their customers")}`}
                </p>
              </li>
            </ul>
          </div>
          <div className=" flex justify-center md:w-2/6 w-full">
            <video controls controlsList=" timeline volume"
              src={''}
              className="lg:h-[274px] w-full lg:w-[391px] h-auto md:rounded-3xl rounded-lg" />
          </div>
        </div>
      </div>
    </div >)
}

export default Publications