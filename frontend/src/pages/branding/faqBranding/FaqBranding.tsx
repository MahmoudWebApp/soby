import { Collapse, Spin } from "antd"
import './index.css'
import { useGetAllQuestionsQuery } from "../../../redux/api/brandingPageApi/faqBrandingApi";
import { t } from "i18next";
import { useState } from "react";


const FaqBranding = () => {
    const lang = localStorage.getItem("lang")
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const { questionsData, isLoadingData } = useGetAllQuestionsQuery<{ questionsData: any[], isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            questionsData: data?.data,
            isLoadingData: isLoading
        }),
    });

    return (
        <Spin spinning={isLoadingData}>
            <div className={`flex flex-col  items-center  gap-12  lg:pb-[80px] md:pb-[60px] pb-[40px] lg:px-44 px-12 mt-12 faq-branding ${classLang}`}>
                <h4 className="text-soby-gray-blue-gray lg:text-5xl md:text-4xl text-3xl  font-semibold">
                    {`${t("Frequently Asked")}`} <span className="text-soby-yellow-dark">
                        {`${t("Questions")}`}
                    </span>
                </h4>

                <div className="bg-white rounded-sm shadow-md md:w-3/4  w-full ">
                    <Collapse  accordion className={`${classLang}`}>
                        {questionsData?.map(q =>
                            <Collapse.Panel 
                            header={<><h4 className="text-lg font-semibold">{lang === "en" ? q.question_en : q.question_ar}</h4></>}
                                key={`q_${q?.id}`}
                                className="bg-white" >
                                <p className=" px-2 mx-3 my-1 ltr:border-l-2  ltr:border-r-0
                                rtl:border-r-2  rtl:border-l-0
                                
                                border-[red]" 
                            >
                                {lang === "en" ? q?.answer_en : q?.answer_ar}

                                </p>
                            </Collapse.Panel>)}


                    </Collapse>
                </div>

            </div>
        </Spin>

    )
}

export default FaqBranding