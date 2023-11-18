import "video-react/dist/video-react.css";
import { useGetAllBooksQuery } from "../../redux/api/aboutPageApi/booksAboutApi";
import { IBooksAboutProps } from "../../models/BookAbout.model";
import { Spin } from "antd";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
const Publications = () => {
  const [searchParams] = useSearchParams();
  const bookId = Number(searchParams.get('id'));
  const lang = localStorage.getItem("lang")
  const [dir] = useState(localStorage.getItem("lang"));
  const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
  const { books, isLoadingData } =
    useGetAllBooksQuery<{ books: IBooksAboutProps[], isLoadingData: boolean }>(undefined, {
      selectFromResult: ({ data, isLoading }) => ({
        books: data?.books,
        isLoadingData: isLoading
      }),
    });
  const bookData = books?.filter(b => b?.id === bookId)[0] ?? {}

  return (
    <Spin spinning={isLoadingData}>
      <div className={`lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6  md:mt-[96px] mt-[70px] ${classLang}`}>
        <div className="grid grid-row-2">
          <div className="flex items-center gap-12 md:flex-nowrap flex-wrap ">
            <div className=" flex justify-center md:w-1/6 w-full">
              <img src={bookData?.image} alt="" className='h-[211px] w-[190px] ]' />
            </div>
            <div className="flex flex-col gap-y-3 md:w-3/6 w-full">
              <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                {lang === "en" ? bookData?.title_en : bookData?.title_ar}
              </h4>
              <div>
                <p className=" text-soby-gray-dark-3 text-base ">
                  {lang === "en" ? bookData?.content_en : bookData?.content_ar}
                </p>
              </div>
            </div>
            <div className=" flex justify-center md:w-2/6 w-full">

              {bookData?.video_link?.includes("https") ?
                <iframe className="sm:w-[500px] w-full" height="392"
                  src={bookData?.video_link}
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>

                </iframe> : <video controls controlsList=" timeline volume"
                  poster="https://placehold.co/500x392"
                  className="sm:w-[500px] w-full lg:h-[392px] h-auto md:rounded-3xl rounded-lg" />}


            </div>
          </div>
        </div>
      </div >
    </Spin>
  )
}

export default Publications