import { t } from "i18next"
import { Link } from "react-router-dom"
import { useGetBookForGiftQuery } from "../redux/api/formGifts/formGiftsApi";
import { Spin } from "antd";


const PageLoadBook = () => {
    const { pdfUrl, isLoadingData } = useGetBookForGiftQuery<{ pdfUrl: any, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            pdfUrl: data?.book,
            isLoadingData: isLoading
        }),
    });
    return (
        <Spin spinning={isLoadingData}>
            <div className=" lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6  md:mt-[96px] mt-[70px] text-center ">

                <Link
                    to={`${pdfUrl}`}
                    download="Example-PDF-document"
                    target="_blank"
                    rel="noopener noreferrer"

                >
                    <span className="bg-soby-yellow-light rounded-3xl xl:px-16 xl:py-3 md:py-2 md:px-8  py-1 px-3 text-white">
                        {`${t("Download Book ")}`}
                    </span>
                </Link>
            </div>
        </Spin>

    )
}

export default PageLoadBook