interface IProps {
    imgSrc: string;
    name: string;
    title: string;
    description: string;
}

const TestimonialCard: React.FC<IProps> = (props) => {
    
    return (
        <div className="flex flex-col gap-y-6 p-3 rounded-sm shadow-sm ">
            <div className="flex gap-x-6">
                <img src={props.imgSrc} alt=""
                    className="w-[80px] h-[80px] rounded-full object-cover "
                    style={{border:"5px solid #E8A042"}}
                />
                <div className="flex  flex-col ">
                    <h3 className="text-soby-gray-blue-gray text-3xl font-semibold">{props.name}</h3>
                    <h4 className="italic text-soby-gray-dark-2 text-xl">{props.title}</h4>
                </div>

            </div>
            <div>
                <p className=" text-soby-gray-dark-3 text-sm text-center">
                    {props.description}
                </p>
            </div>

        </div>
    )
}

export default TestimonialCard