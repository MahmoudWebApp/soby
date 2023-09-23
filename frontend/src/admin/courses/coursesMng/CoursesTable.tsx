import { Space, Table, Tag } from 'antd';
import TextEnAr from '../../../component/TextEnAr';
import PopconfirmDelete from '../../../component/popconfirmDelete/PopconfirmDelete';
import EditCourseModal from './EditCourseModal';
import { useDeleteCourseMutation } from '../../../redux/api/coursesPageApi/coursesApi';
import ContentSliderModal from '../../home/sliderHeroMng/ContentSliderModal';




const CoursesTable: React.FC<{ coursesData: any[] }> = (props) => {
const [deleteCourse, { isLoading }] = useDeleteCourseMutation();

    const columns: any[] = [
        {
            title: "Image",
            dataIndex: "image",
            render: (text: any) => {
                return <img src={text} className='w-[50px]  mx-auto' alt='' />;
            },
        },
        {
            title: <TextEnAr t1={'Button'} t2={'Link'} />,
            dataIndex: "link",
            width: "5%",
            render: (text: any) => {
                return <>{text ? <Tag color='green'>Have Url</Tag> : <Tag color='red'>No Have Url</Tag>}</>;
            },
        },
        {
            title: <TextEnAr t1={'Title'} t2={'English'} />,
            dataIndex: "name_en",
            render: (text: any) => {
                return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
            },
        },
        {
            title: <TextEnAr t1={'Title'} t2={'Arabic'} />,
            dataIndex: "name_ar",
            render: (text: any) => {
                return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
            },
        },
        {
            title: "Content",
            dataIndex: "",
            width: "5%",
            render: (record: any) => {
                return <>
                    <ContentSliderModal contents={record?.content?.map((c:any) =>{
                        return{
                            ...c,key:c?.content_en
                        }
                    })} />
                </>;
            },
        },
        {
            title: "Action",
            dataIndex: "",
            width: "10%",
            render: (record: any) => {
                return <Space className="flex flex-col justify-center gap-y-3">
                    <EditCourseModal courseData={record} />
                    <PopconfirmDelete onConfirm={async () => {
                        try {
                            await deleteCourse({ course_id: record?.id })
                        } catch (err) {
                            console.log(err);

                        }

                    }} title={'Delete Course'} isLoading={isLoading} />


                </Space>
            }
        },

    ];
    return (
        <Table columns={columns} dataSource={props.coursesData} bordered />
    )
}

export default CoursesTable