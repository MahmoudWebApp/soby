

const LessonCard: React.FC<{ iconSrc: string; title: string; description: string }> = (props) => {
    return (
        <div className="flex md:flex-row flex-col gap-3 justify-start">
            <div className="rounded-full w-[50px] h-[50px] bg-[#d4677a]  flex items-center p-3">
               <img className='w-full h-auto object-cover' src={props.iconSrc} /> 
            </div>
            <div className="flex flex-col ">
                <h3 className="md:text-2xl text-xl font-bold text-[#d4677a] capitalize">
                    {props.title}
                </h3>
                <p className="md:text-xl text-lg font-semibold text-[#4d5051] ">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default LessonCard