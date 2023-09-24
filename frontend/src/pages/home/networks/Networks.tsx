import { Spin } from "antd";
import demoIcon from "../../../assets/react.svg"
import { INetworksProps } from "../../../models/Networks.model";
import { useGetAllNetworksQuery } from "../../../redux/api/homePageApi/networksHomeApi";
import NetworkCard from "./NetworkCard"

const Networks = () => {
    const { networks, isLoadingData } = useGetAllNetworksQuery<{ networks: INetworksProps[], isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            networks: data?.networks ?? [],
            isLoadingData: isLoading
        }),
    });
    console.log(networks);

    const networksData: any[] = [
        {
            id: 'n_1', name: "Network 1",
            iconSrc: demoIcon,
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
            findMoreUrl: "/"
        },
        {
            id: 'n_2', name: "Network 2",
            iconSrc: demoIcon,
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
            findMoreUrl: "/"
        },
        {
            id: 'n_3', name: "Network 3",
            iconSrc: demoIcon,
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
            findMoreUrl: "/"
        },
        {
            id: 'n_4', name: "Network 4",
            iconSrc: demoIcon,
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
            findMoreUrl: "/"
        }, {
            id: 'n_5', name: "Network 5",
            iconSrc: demoIcon,
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
            findMoreUrl: "/"
        }, {
            id: 'n_6', name: "Network 6",
            iconSrc: demoIcon,
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
            findMoreUrl: "/"
        }
    ]
    return (
        <Spin spinning={isLoadingData}>
            <div className="flex md:flex-row  gap-12 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6">
                <div className="flex flex-col gap-y-3 ">
                    <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                        Join
                    </h4>
                    <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                        My Network
                    </h3>
                    <div className="mt-12 flex items-center lg:gap-12 md:gap-x-[4%] gap-y-6 flex-wrap ">
                        {networksData?.map(n => <NetworkCard
                            iconSrc={n.iconSrc} name={n.name} description={n.description}
                            findMoreUrl={n.findMoreUrl} key={n.id} />)}
                    </div>
                </div>
            </div>
        </Spin>

    )

}

export default Networks