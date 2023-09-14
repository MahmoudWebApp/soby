

const LessonCard: React.FC<{ iconSrc: string; title: string; description: string }> = (props) => {
    return (
        <div className="flex gap-x-3 justify-start">
            <div className="rounded-full w-14 h-14 bg-[#d4677a]  flex items-center">
                {/* <img className='w-full h-auto object-cover' src={props.iconSrc} /> */}
            </div>
            <div className="flex flex-col ">
                <h3 className="text-2xl font-bold text-[#d4677a] capitalize">
                    {props.title}
                </h3>
                <p className="text-2xl font-semibold text-[#4d5051] ">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default LessonCard