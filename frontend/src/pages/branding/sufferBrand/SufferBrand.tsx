import SufferCard from "./SufferBrandCard"


const SufferBrand = () => {
    const sufferBrandData: any[] = [
        {
            id: 's_1', 
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
           
        },
        {
            id: 's_2',
         
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      
        },
        {
            id: 's_3', 
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
            
        },
        {
            id: 's_4', 
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
            
        }, {
            id: 's_5',
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
         
        }, {
            id: 's_6', 
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
           
        }
    ]
    return (
        <div className="flex md:flex-row  gap-12 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6">
            <div className="flex flex-col gap-y-3 ">
                <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                Do you 
                </h4>
                <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                Suffer
                </h3>
                <div className="mt-12 flex items-center lg:gap-12 md:gap-x-[4%] gap-y-6 flex-wrap ">
                    {sufferBrandData?.map(n => <SufferCard
                         description={n.description}
                        key={n.id} />)}
                </div>
            </div>
        </div>
    )

}

export default SufferBrand