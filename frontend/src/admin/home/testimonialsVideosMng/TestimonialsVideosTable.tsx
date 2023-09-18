import { Space, Table } from 'antd';
import DeleteButton from '../../../component/DeleteButton';





const TestimonialsVideosTable: React.FC<{ testimonialsVideosData: any[] }> = (props) => {
    const columns: any[] = [
        {
            title: "Video",
            dataIndex: "video_url",
            render: (text: any) => {
                return <><p className='text-word-dark text-sm'>{text}</p></>;
            },
        },
        {
            title: "Action",
            dataIndex: "",
            width: "20%",
            render: (record:any) => {
                return <Space className="flex  justify-center gap-x-3">
                    <DeleteButton onClick={async () => {
                        try {
                            console.log(record?.id);
                        } catch (err) {
                            console.log(err);

                        }

                    }} />


                </Space>
            }
        },

    ];
    return (
        <Table columns={columns} dataSource={props.testimonialsVideosData} bordered />
    )
}

export default TestimonialsVideosTable