import { Spin } from "antd";


import { useGetAllPostsQuery } from "../../redux/api/blogPageApi/blogApi";
import PostCard from "./PostCard";

const Blog = () => {
  const lang = localStorage.getItem("lang")
  const { blogData, isLoadingData } = useGetAllPostsQuery<{ blogData: any[], isLoadingData: boolean }>(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      blogData: data?.data,
      isLoadingData: isLoading
    }),
  });


  return (
    <Spin spinning={isLoadingData}>
      <div className=" lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6  md:mt-[96px] mt-[70px]  ">
        <div className="flex flex-cols gap-y-12">
          {blogData?.map(p => <PostCard
            key={`post_${p?.id}`}
            imgSrc={p?.image}
            title={lang === "en" ? p?.title_en : p?.title_ar}
            description={p?.content}
       
            />)} 
        </div>
      </div>
    </Spin>

  )
}

export default Blog