import CourseCard from "./CourseCard"

const Courses = () => {
  const coursesData: any[] = [
    {
      id: 'c_1',
      title: "Course name",
      imgSrc: '',
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      findMoreUrl: "/"
    },
    {
      id: 'c_2',
      title: "Course name",
      imgSrc: '',
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      findMoreUrl: "/"
    },
    {
      id: 'c_3',
      title: "Course name",
      imgSrc: '',
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      findMoreUrl: "/"
    },
    {
      id: 'c_4',
      title: "Course name",
      imgSrc: '',
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      findMoreUrl: "/"
    },
    {
      id: 'c_5',
      title: "Course name",
      imgSrc: '',
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      findMoreUrl: "/"
    },
    {
      id: 'c_6',
      title: "Course name",
      imgSrc: '',
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      findMoreUrl: "/"
    },

  ]
  return (
    <div className=" lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6  md:mt-[96px] mt-[70px]  ">

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-12">
        {coursesData?.map(c => <CourseCard imgSrc={c.imgSrc} title={c.title} description={c.description} findMoreUrl={c.findMoreUrl} />)}
      </div>
    </div>
  )
}

export default Courses