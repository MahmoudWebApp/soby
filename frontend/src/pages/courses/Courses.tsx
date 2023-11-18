import { Spin } from "antd";
import { useGetAllCoursesQuery } from "../../redux/api/coursesPageApi/coursesApi";
import CourseCard from "./CourseCard"

const Courses = () => {
  const lang = localStorage.getItem("lang")
  const { coursesData, isLoadingData } =
    useGetAllCoursesQuery<{ coursesData: any[], isLoadingData: boolean }>(undefined, {
      selectFromResult: ({ data, isLoading }) => ({
        coursesData: data?.data,
        isLoadingData: isLoading
      }),
    });
  console.log(coursesData);

  return (
    <Spin spinning={isLoadingData}>
      <div className=" lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6  md:mt-[96px] mt-[70px]  ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-12">
          {coursesData?.map(c => <CourseCard
            key={`course_${c?.id}`}
            imgSrc={c?.image}
            title={lang === "en" ? c?.name_en : c?.name_ar}
            description={c?.content}
            findMoreUrl={c?.link} />)}
        </div>
      </div>
    </Spin>

  )
}

export default Courses