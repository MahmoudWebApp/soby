import InvestmentCard from "./InvestmentCard"







const InvestmentBrand = () => {

    const investmentData: any[] = [
        { id: 'i-1', title: "Do it your self", planUrl: "/", price: 0.00, description: "lding and marketing their personal brands ting the marketing of their" },
        { id: 'i-2', title: "Do it your self", planUrl: "/", price: 0.00, description: "lding and marketing their personal brands ting the marketing of their" },
        { id: 'i-3', title: "Do it your self", planUrl: "/", price: 0.00, description: "lding and marketing their personal brands ting the marketing of their" }

    ]


    return (
        <div className=" lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 bg-soby-light-2">
            <div className="flex flex-col gap-y-3">
                <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                    Brand training
                </h4>
                <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                    Investment
                </h3>

            </div>
            <div className="mt-12 flex items-center lg:gap-12 md:gap-x-[4%] gap-y-6 flex-wrap ">
                {investmentData?.map(n => <InvestmentCard
                    title={n.title} description={n.description}
                    planUrl={n.planUrl} key={n.id} price={n.price} />)}
            </div>

        </div>
    )
}

export default InvestmentBrand