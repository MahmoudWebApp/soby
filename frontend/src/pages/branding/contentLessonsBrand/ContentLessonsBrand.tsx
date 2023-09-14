import testImage from "../../../assets/react.svg"
import LessonCard from "./LessonCard"





const ContentLessonsBrand = () => {

    const lessonData: any[] = [
        { id: 'l-1', title: "lesson 1", iconSrc: testImage, description: "After a day at Giraffe, I recognize that my little Angel " },
        { id: 'l-2', title: "lesson 2", iconSrc: testImage, description: "After a day at Giraffe, I recognize that my little Angel " },
        { id: 'l-3', title: "lesson 3", iconSrc: testImage, description: "After a day at Giraffe, I recognize that my little Angel " },
        { id: 'l-4', title: "lesson 4", iconSrc: testImage, description: "After a day at Giraffe, I recognize that my little Angel " },
        { id: 'l-5', title: "lesson 5", iconSrc: testImage, description: "After a day at Giraffe, I recognize that my little Angel " },
        { id: 'l-6', title: "lesson 6", iconSrc: testImage, description: "After a day at Giraffe, I recognize that my little Angel " },
        { id: 'l-7', title: "lesson 7", iconSrc: testImage, description: "After a day at Giraffe, I recognize that my little Angel " },
        { id: 'l-8', title: "lesson 8", iconSrc: testImage, description: "After a day at Giraffe, I recognize that my little Angel " },
        { id: 'l-9', title: "lesson 9", iconSrc: testImage, description: "After a day at Giraffe, I recognize that my little Angel " },
        { id: 'l-10', title: "lesson 10", iconSrc: testImage, description: "After a day at Giraffe, I recognize that my little Angel " }
    ]


    return (
        <div className=" lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6 bg-soby-light-2">
            <div className="flex flex-col gap-y-3">
                <h4 className="text-soby-yellow-light lg:text-5xl md:text-4xl text-3xl  font-semibold">
                    Meet the
                </h4>
                <h3 className="text-soby-gray-blue-gray lg:text-7xl md:text-6xl text-5xl font-bold">
                    Trainers
                </h3>
                <div className="mt-12 flex flex-col gap-y-12 bg-white p-12">
                    <div className="text-center flex flex-col gap-y-3 flex-center justify-center px-[18%]">
                        <h3 className="text-5xl font-semibold text-center">
                            What is Systematic Selling
                            Strategies Training Program?
                        </h3>
                        <p className="text-3xl text-[#4d5051]">
                            A complete training program with 10 lessons designed to enable you to achieve your full sales potential
                        </p>
                        <p className="text-3xl text-[#4d5051] mt-3">
                            Learn how to:
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-6">
                        {
                            lessonData?.map(l => <LessonCard key={l.id} iconSrc={l.iconSrc} title={l.title} description={l.description} />)
                        }
                    </div>
                </div>


            </div>

        </div>
    )
}


export default ContentLessonsBrand