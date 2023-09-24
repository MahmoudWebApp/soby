import { Spin } from "antd";
import demoIcon from "../../../assets/svg/book-dark-icon.svg";
import { IBooksAboutProps } from "../../../models/BookAbout.model";
import { useGetAllBooksQuery } from "../../../redux/api/aboutPageApi/booksAboutApi";
import AboutPublicationCard from "./AboutPublicationCard";

const AboutPublication = () => {
    const { books, isLoadingData } = useGetAllBooksQuery<{ books: IBooksAboutProps[], isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            books: data?.books,
            isLoadingData: isLoading
        }),
    });
    console.log(books);

    const aboutPublicationData: any[] = [
        {
            id: 'p_1', name: "Title text 2",
            iconSrc: demoIcon,
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
            findMoreUrl: "/"
        },
        {
            id: 'p_2', name: "Title text 2",
            iconSrc: demoIcon,
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
            findMoreUrl: "/"
        },
        {
            id: 'p_3', name: "Title text3",
            iconSrc: demoIcon,
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
            findMoreUrl: "/"
        },
        {
            id: 'p_4', name: "Title text4",
            iconSrc: demoIcon,
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
            findMoreUrl: "/"
        },
    ]
    return (
        <Spin spinning={isLoadingData}>
            <div className="flex md:flex-row  lg:gap-12 gap-6 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6">

                <div className="flex flex-col gap-y-3 w-full">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                        Soby
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        Publication
                    </h3>
                    <div className="mt-12 flex items-center lg:gap-12 md:gap-x-[4%] gap-y-6 flex-wrap ">
                        {aboutPublicationData?.map(n => <AboutPublicationCard
                            iconSrc={n.iconSrc} name={n.name} description={n.description}
                            findMoreUrl={n.findMoreUrl} key={n.id} />)}
                    </div>
                </div>
            </div>
        </Spin>
    )
}

export default AboutPublication
