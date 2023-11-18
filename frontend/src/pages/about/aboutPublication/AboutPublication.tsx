import { Spin } from "antd";

import { IBooksAboutProps } from "../../../models/BookAbout.model";
import { useGetAllBooksQuery } from "../../../redux/api/aboutPageApi/booksAboutApi";
import AboutPublicationCard from "./AboutPublicationCard";
import { t } from "i18next";
import { useState } from "react";

const AboutPublication = () => {
    const lang=localStorage.getItem("lang")
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const { books, isLoadingData } = useGetAllBooksQuery<{ books: IBooksAboutProps[], isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            books: data?.books,
            isLoadingData: isLoading
        }),
    });
    
        return (
        <Spin spinning={isLoadingData}>
            <div className={`flex md:flex-row  lg:gap-12 gap-6 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 ${classLang}`}>

                <div className="flex flex-col gap-y-3 w-full">
                    <h4 className="rtl:hidden text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                        {`${t("Authored")}`}
                    </h4>
                    <h3 className="rtl:hidden text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        {`${t("Books")}`}
                    </h3>
                    <h3 className="ltr:hidden text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        {`${t("Authored Books")}`}
                    </h3>
                    <div className="mt-12 flex items-center lg:gap-12 md:gap-x-[4%] gap-y-6 flex-wrap ">
                        {books?.map(n => <AboutPublicationCard
                            iconSrc={n?.image} name={lang === "en" ? n?.title_en : n?.title_ar}
                            description={lang === "en" ? n?.content_en : n?.content_ar}
                            findMoreUrl={n?.link}
                            key={`book_${n?.id}`}

                        />)}
                    </div>
                </div>
            </div>
        </Spin>
    )
}

export default AboutPublication
