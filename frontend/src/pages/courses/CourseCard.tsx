import { useNavigate } from "react-router-dom";
const CourseCard: React.FC<{ imgSrc: string, title: string, description: string, findMoreUrl: string }> = (props) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-y-3">

            <img src={"https://placehold.co/271x233"} className="md:w-[271px] w-full md:h-[233px] h-auto md:rounded-3xl rounded-md" />
            <h4 className="text-soby-yellow-light text-4xl font-semibold">
                {props.title}
            </h4>
            <div>
                <p className=" text-soby-gray-dark-3 text-base ">
                    {props.description}
                </p>
            </div>
            <button className='rounded-3xl bg-soby-gray-blue-gray text-base w-fit text-white px-4 py-2'
                onClick={() => navigate(props.findMoreUrl)}
            >
                Find out more
            </button>
        </div>
    )
}

export default CourseCard