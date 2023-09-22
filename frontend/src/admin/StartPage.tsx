import { Spin, Table } from "antd";
import TitlePageAdmin from "../component/TitlePageAdmin";
import { useGetAllVisitorsQuery } from "../redux/api/formGifts/formGiftsApi";


const StartPage = () => {
  const { visitorsData, isLoadingData } = useGetAllVisitorsQuery<{ visitorsData: any[], isLoadingData: boolean }>(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      visitorsData: data?.courses,
      isLoadingData: isLoading
    }),
  });
  const columns: any[] = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text: any) => {
        return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text: any) => {
        return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
      },
    },
    {
      title: "Phone",
      dataIndex: "mobile",
      render: (text: any) => {
        return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
      },
    },
    {
      title: "Country",
      dataIndex: "country",
      render: (text: any) => {
        return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
      },
    },
    {
      title: "Message",
      dataIndex: "message",
      width:"40%",
      render: (text: any) => {
        return <><p className='text-word-dark text-xs'>{text}</p></>;
      },
    },



  ];
  return (
    <div className="mt-12 px-12 admin-management">
      <TitlePageAdmin title={"Visitors"} />

      <Spin spinning={isLoadingData} >
        <Table columns={columns} dataSource={visitorsData} bordered className="mt-6"/>
      </Spin>

    </div>
  )
}

export default StartPage