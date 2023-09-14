import NetworkCard from "./NetworkCard"

const Networks = () => {
  const networksData: any[] = [
    {
      id: 'n_1',
      title: "List 1",
      videoSrc: '',
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      findMoreUrl: "/"
    },
    {
      id: 'n_2',
      title: "List 2",
      videoSrc: '',
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      findMoreUrl: "/"
    },
    {
      id: 'n_3',
      title: "List 3",
      videoSrc: '',
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      findMoreUrl: "/"
    },
   

  ]
  return (
    <div className=" lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6  md:mt-[96px] mt-[70px]  ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-12">
        {networksData?.map(c => <NetworkCard videoSrc={c.videoSrc} title={c.title} description={c.description} findMoreUrl={c.findMoreUrl} />)}
      </div>
    </div>
  )
}

export default Networks