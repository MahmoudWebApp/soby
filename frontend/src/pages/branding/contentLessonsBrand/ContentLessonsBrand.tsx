import { t } from "i18next"
import LessonCard from "./LessonCard"
import { useState } from "react";
import { useGetAllLessonsQuery } from "../../../redux/api/brandingPageApi/lessonsBrandingApi";
import { Spin } from "antd";





const ContentLessonsBrand = () => {
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    const { lessons, isLoadingData, } = useGetAllLessonsQuery<{ lessons: any, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            lessons: data?.data[0],
            isLoadingData: isLoading
        }),
    });


    return (
        <Spin spinning={isLoadingData}>
            <div className={`lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 bg-soby-light-2 ${classLang}`}>
                <div className="flex flex-col gap-y-3">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold rtl:hidden">
                        {`${t("The")}`}
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        {`${t("Content")}`}
                    </h3>
                    <div className="mt-12 flex flex-col gap-y-12 bg-white md:p-12 p-2">
                        <div className="text-center flex flex-col gap-y-3 flex-center justify-center px-[18%]">
                            <h3 className="md:text-5xl text-2xl font-semibold text-center">
                                {`${t("What is Systematic Selling Strategies Training Program?")}`}

                            </h3>
                            <p className="md:text-3xl text-xl text-[#4d5051]">
                                {`${t("A complete training program with 10 lessons designed to enable you to achieve your full sales potential")}`}
                            </p>
                            <p className="md:text-3xl text-xl text-[#4d5051] mt-3">
                                {`${t("Learn how to:")}`}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-6">

                            <LessonCard key={"l-1"} iconSrc={lessons?.icon_one}
                                title={dir === "en" ? lessons?.title_one_en : lessons?.title_one_ar}
                                description={dir === "en" ? lessons?.content_one_en : lessons?.content_one_ar} />
                            <LessonCard key={"l-2"} iconSrc={lessons?.icon_two}
                                title={dir === "en" ? lessons?.title_two_en : lessons?.title_two_ar}
                                description={dir === "en" ? lessons?.content_two_en : lessons?.content_two_ar} />
                            <LessonCard key={"l-3"} iconSrc={lessons?.icon_three}
                                title={dir === "en" ? lessons?.title_three_en : lessons?.title_three_ar}
                                description={dir === "en" ? lessons?.content_three_en : lessons?.content_three_ar} />
                            <LessonCard key={"l-4"} iconSrc={lessons?.icon_four}
                                title={dir === "en" ? lessons?.title_four_en : lessons?.title_four_ar}
                                description={dir === "en" ? lessons?.content_four_en : lessons?.content_four_ar} />
                            <LessonCard key={"l-5"} iconSrc={lessons?.icon_five}
                                title={dir === "en" ? lessons?.title_five_en : lessons?.title_five_ar}
                                description={dir === "en" ? lessons?.content_five_en : lessons?.content_five_ar} />
                            <LessonCard key={"l-6"} iconSrc={lessons?.icon_six}
                                title={dir === "en" ? lessons?.title_six_en : lessons?.title_six_ar}
                                description={dir === "en" ? lessons?.content_six_en : lessons?.content_six_ar} />
                            <LessonCard key={"l-7"} iconSrc={lessons?.icon_seven}
                                title={dir === "en" ? lessons?.title_seven_en : lessons?.title_seven_ar}
                                description={dir === "en" ? lessons?.content_seven_en : lessons?.content_seven_ar} />
                            <LessonCard key={"l-8"} iconSrc={lessons?.icon_eight}
                                title={dir === "en" ? lessons?.title_eight_en : lessons?.title_eight_ar}
                                description={dir === "en" ? lessons?.content_eight_en : lessons?.content_eight_ar} />
                            <LessonCard key={"l-9"} iconSrc={lessons?.icon_nine}
                                title={dir === "en" ? lessons?.title_nine_en : lessons?.title_nine_ar}
                                description={dir === "en" ? lessons?.content_nine_en : lessons?.content_nine_ar} />
                            <LessonCard key={"l-10"} iconSrc={lessons?.icon_ten}
                                title={dir === "en" ? lessons?.title_ten_en : lessons?.title_ten_ar}
                                description={dir === "en" ? lessons?.content_ten_en : lessons?.content_ten_ar} />
                        </div>
                    </div>


                </div>

            </div>
        </Spin>
    )
}


export default ContentLessonsBrand