import { Space, Table } from 'antd';
import PopconfirmDelete from '../../../component/popconfirmDelete/PopconfirmDelete';
import { useDeleteTestimonialVideoMutation } from '../../../redux/api/homePageApi/testimoialsVideos';





const TestimonialsVideosTable: React.FC<{ testimonialsVideosData: any[] }> = (props) => {
    const [deleteTestimonialVideo, { isLoading }] = useDeleteTestimonialVideoMutation();
    const columns: any[] = [
        {
            title: "Video",
            dataIndex: "video_link",
            render: (text: any) => {
                return <><p className='text-word-dark text-xs'>{text}</p></>;
            },
        },
        {
            title: "Action",
            dataIndex: "",
            width: "20%",
            render: (record: any) => {
                return <Space className="flex  justify-center gap-x-3">
                    <PopconfirmDelete onConfirm={async () => {
                        try {
                            await deleteTestimonialVideo({ testimonialVideo_id: record?.id })
                        } catch (err) {
                            console.log(err);

                        }

                    }} title={'Delete Testimonial Video Link'} isLoading={isLoading} />


                </Space>
            }
        },

    ];
    return (
        <Table columns={columns} dataSource={props.testimonialsVideosData} bordered />
    )
}

export default TestimonialsVideosTable