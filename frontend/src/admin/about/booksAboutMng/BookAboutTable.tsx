import { Space, Table, Tag } from 'antd';
import TextEnAr from '../../../component/TextEnAr';
import PopconfirmDelete from '../../../component/popconfirmDelete/PopconfirmDelete';
import EditBooksAboutModal from './EditBookAboutModal';
import { useDeleteBookMutation } from '../../../redux/api/aboutPageApi/booksAboutApi';




const BookAboutTable: React.FC<{ booksData: any[] }> = (props) => {
const [deleteBook, { isLoading }] = useDeleteBookMutation();

    const columns: any[] = [
        {
            title: "Icon",
            dataIndex: "icon",
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
            dataIndex: "title_en",
            render: (text: any) => {
                return <><h3 className='text-word-dark text-lg'>{text}</h3></>;
            },
        },
        {
            title: <TextEnAr t1={'Title'} t2={'Arabic'} />,
            dataIndex: "title_ar",
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
                    <EditBooksAboutModal bookData={record} />
                    <PopconfirmDelete onConfirm={async () => {
                        try {
                            await deleteBook({ book_id: record?.id })
                        } catch (err) {
                            console.log(err);

                        }

                    }} title={'Delete Book'} isLoading={isLoading} />


                </Space>
            }
        },

    ];
    return (
        <Table columns={columns} dataSource={props.booksData} bordered />
    )
}

export default BookAboutTable