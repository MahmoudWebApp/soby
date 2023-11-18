import { Link } from "react-router-dom";
import youtubeImage from '../../assets/img/youtube.png'
import { t } from "i18next";
const CourseCard: React.FC<{ title: string, description: any, findMoreUrl: string }> = (props) => {
    const lang = localStorage.getItem("lang")
    return (
        <div className="flex flex-col gap-y-3">

            <img src={youtubeImage}
                className="md:w-[271px] w-full md:h-[233px] h-auto md:rounded-3xl rounded-md"
            />
            <Link to={props.findMoreUrl} >
                <h4 className="text-soby-yellow-light text-3xl font-semibold
                hover:text-soby-gray-blue-gray
         
                "
                >
                    {`${t("Play")}`}
                </h4>
            </Link>

            <h4 className="text-soby-gray-blue-gray lg:text-6xl md:text-5xl text-4xl font-bold">
                {props.title}
            </h4>
            <div>
                <ul className="flex flex-col gap-y-3">
                    {props.description?.map((d: any, index: number) => 
                        <p className=" text-soby-gray-dark-3 text-base " key={`net_${index}`}>
                            {lang === "en" ? d?.content_en : d?.content_ar}
                        </p>
                    )}
                </ul>

            </div>

        </div >
    )
}

export default CourseCard