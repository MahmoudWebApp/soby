import { t } from "i18next"
import ConsultationForm from "./ConsultationForm"



const Consultation = () => {
    return (
        <div className="flex md:flex-row  gap-12 flex-col lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 bg-soby-light-2">

            <div className="flex flex-col gap-y-3 w-full">
                <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl   font-semibold">
                    Book
                </h4>
                <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                    A Consultation
                </h3>
                <div className="mt-6 ">
                    <h5 className="xl:text-xl  text-xs  text-soby-gray-dark-4 font-extrabold mb-2 word-break">
                        {`${t(
                            "Contact Me in 3 Easy Steps:"
                        )}`}
                    </h5>
                    <ul className="items-start rtl:flex-end flex-col">
                        <li>
                            <p className="xl:text-lg  text-xs  text-soby-gray-dark-3  ">
                                {`${t("Fill out the contact form.")}`}
                            </p>
                        </li>
                        <li>
                            <p className="xl:text-lg  text-xs  text-soby-gray-dark-3  ">
                                {`${t(
                                    "Schedule a free 30-minute Zoom meeting."
                                )}`}
                            </p>
                        </li>
                        <li>
                            <p className="xl:text-lg  text-xs  text-soby-gray-dark-3  ">
                                {`${t("Receive personalized assistance for your needs.")}`}
                            </p>
                        </li>

                    </ul>
                </div>
                <ConsultationForm />
            </div>


        </div>
    )
}

export default Consultation