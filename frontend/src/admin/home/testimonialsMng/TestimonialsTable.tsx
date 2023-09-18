import { Avatar, Space, Table } from 'antd';
import TextEnAr from '../../../component/TextEnAr';
import EditTestimonialsModal from './EditTestimonialsModal';
import { useDeleteTestimonialMutation } from '../../../redux/api/homePageApi/TestimonialsHomeApi';
import PopconfirmDelete from '../../../component/popconfirmDelete/PopconfirmDelete';




const TestimonialsTable: React.FC<{ testimonialsData: any[] }> = (props) => {

    const [deleteTestimonial, { isLoading }] = useDeleteTestimonialMutation();
    const columns: any[] = [
        {
            title: "Avatar",
            dataIndex: "image",
            render: (text: any) => {
                return <Avatar size={30} src={text} shape="circle" />
            },
        },
        {
            title: <TextEnAr t1={'Name'} t2={'English'} />,
            dataIndex: "name_en",
            render: (text: any) => {
                return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
            },
        },
        {
            title: <TextEnAr t1={'Name'} t2={'Arabic'} />,
            dataIndex: "name_ar",
            render: (text: any) => {
                return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
            },
        },
        {
            title: <TextEnAr t1={'Position'} t2={'English'} />,
            dataIndex: "position_en",
            render: (text: any) => {
                return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
            },
        },
        {
            title: <TextEnAr t1={'Position'} t2={'Arabic'} />,
            dataIndex: "position_ar",
            render: (text: any) => {
                return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
            },
        },
        {
            title: <TextEnAr t1={'Description'} t2={'English'} />,
            dataIndex: "content_en",
            render: (text: any) => {
                return <><p className='text-word-dark text-sm'>{text}</p></>;
            },
        },
        {
            title: <TextEnAr t1={'Description'} t2={'Arabic'} />,
            dataIndex: "content_ar",
            render: (text: any) => {
                return <><p className='text-word-dark text-sm'>{text}</p></>;
            },
        },
        {
            title: "Action",
            dataIndex: "",
            width: "10%",
            render: (record: any) => {
                return <Space className="flex flex-col justify-center gap-y-3">
                    <EditTestimonialsModal testimonialData={record} />
                    <PopconfirmDelete onConfirm={async () => {
                        try {
                            await deleteTestimonial({ testimonial_id: record?.id })
                        } catch (err) {
                            console.log(err);

                        }

                    }} title={'Delete Testimonial'} isLoading={isLoading} />

                </Space>
            }
        },

    ];
    return (
        <Table columns={columns} dataSource={props.testimonialsData} bordered />
    )
}

export default TestimonialsTable