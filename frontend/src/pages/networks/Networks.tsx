import { Spin } from "antd";
import { useGetAllNetworkPlayListsQuery } from "../../redux/api/networkPageApi/networkPlayListApi";
import NetworkCard from "./NetworkCard"
import { useState } from "react";

const Networks = () => {
  const [dir] = useState(localStorage.getItem("lang"));
  const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
  const { playlistsData, isLoadingData } = 
  useGetAllNetworkPlayListsQuery<{ playlistsData: any[], isLoadingData: boolean }>(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      playlistsData: data?.data,
      isLoadingData: isLoading
    }),
  });
 

  return (
    <Spin spinning={isLoadingData}>
      <div className={`lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6  md:mt-[96px] mt-[70px] ${classLang}`}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-12">
          {playlistsData?.map(c =>
            <NetworkCard
            key={`playlist_${c?.id}`}
              title={dir==="en"?c?.title_en:c?.title_ar}
              description={c?.content}
              findMoreUrl={c?.link}
            />)}
        </div>
      </div>
    </Spin>

  )
}

export default Networks