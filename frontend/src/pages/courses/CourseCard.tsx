import { t } from "i18next";
import { useNavigate } from "react-router-dom";
const CourseCard: React.FC<{ imgSrc: string, title: string, description: any[], findMoreUrl: string }>
    = (props) => {
        const lang = localStorage.getItem("lang")
        const navigate = useNavigate();
        return (
            <div className="flex flex-col gap-y-3">

                <img src={props.imgSrc ? props.imgSrc : "https://placehold.co/271x233"}
                    className="md:w-[271px] w-full md:h-[233px] h-auto md:rounded-3xl rounded-md" />
                <h4 className="text-soby-yellow-light text-4xl font-semibold">
                    {props.title}
                </h4>
                <div>
                    <ul className="flex items-start rtl:flex-end flex-col gap-y-3">
                        {props?.description?.map((x: any, index: number) => {
                            return <li key={`ab-${index}`}>
                                <p className="text-base   text-soby-gray-dark-3   ">
                                    {lang === "en" ? x.content_en : x?.content_ar}
                                </p>
                            </li>

                        })}


                    </ul>
                </div>
                <button className='rounded-3xl bg-soby-gray-blue-gray text-base w-fit text-white px-4 py-2'
                    onClick={() => navigate(props.findMoreUrl)}
                >
                    {`${t("Find out more")}`}
                </button>
            </div>
        )
    }

export default CourseCard