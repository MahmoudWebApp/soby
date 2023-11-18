import { useNavigate } from "react-router-dom";

interface IProps {
    imgSrc: string;
    name: string;
    title: string;
    description: string;
    profileUrl: string;
}

const TrainerCard: React.FC<IProps> = (props) => {
const navigate =useNavigate()
    return (
        <div className="flex md:flex-row flex-col gap-6 p-3 rounded-sm shadow-sm ">
            <img src={props.imgSrc} alt=""
                className="w-[304px] h-[304px] rounded-full object-cover "
                style={{ border: "5px solid #E8A042" }}
            />
              <div className="flex flex-col justify-between">

              
            <div className="flex flex-col gap-y-3">

                <div className="flex  flex-col ">
                    <h3 className="text-soby-gray-blue-gray text-3xl font-semibold">{props.name}</h3>
                    <h4 className="italic text-soby-gray-dark-2 text-xl">{props.title}</h4>
                </div>
                <div>
                    <p className=" text-soby-gray-dark-3 text-sm ">
                        {props.description}
                    </p>
                </div>

            </div>
             <button className='md:mt-0 mt-3 rounded-3xl bg-soby-gray-blue-gray text-base w-fit text-white px-4 py-2'
                onClick={() => navigate(props.profileUrl)}
            >
                Find out more
            </button> 
            </div>


        </div>
    )
}

export default TrainerCard