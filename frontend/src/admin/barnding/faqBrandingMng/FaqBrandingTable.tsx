import { Space, Table } from 'antd';
import TextEnAr from '../../../component/TextEnAr';
import PopconfirmDelete from '../../../component/popconfirmDelete/PopconfirmDelete';
import EditFaqBrandingModal from './EditFaqBrandingModal';
import { useDeleteQuestionMutation } from '../../../redux/api/brandingPageApi/faqBrandingApi';




const QuestionsTable: React.FC<{ questionsData: any[] }> = (props) => {
    const [deleteQuestion, { isLoading }] = useDeleteQuestionMutation();

    const columns: any[] = [

        {
            title: <TextEnAr t1={'Question'} t2={'English'} />,
            dataIndex: "question_en",
            render: (text: any) => {
                return <><p className='text-word-dark text-sm'>{text}</p></>;
            },
        },
        {
            title: <TextEnAr t1={'Question'} t2={'Arabic'} />,
            dataIndex: "question_ar",
            render: (text: any) => {
                return <><p className='text-word-dark text-sm'>{text}</p></>;
            },
        },

        {
            title: <TextEnAr t1={'Answer'} t2={'English'} />,
            dataIndex: "answer_en",
            render: (text: any) => {
                return <><p className='text-word-dark text-sm'>{text}</p></>;
            },
        },
        {
            title: <TextEnAr t1={'Answer'} t2={'Arabic'} />,
            dataIndex: "answer_ar",
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
                    <EditFaqBrandingModal questionData={record} />
                    <PopconfirmDelete onConfirm={async () => {
                        try {
                            await deleteQuestion({ question_id: record?.id })
                        } catch (err) {
                            console.log(err);

                        }

                    }} title={'Delete Question'} isLoading={isLoading} />


                </Space>
            }
        },

    ];
    return (
        <Table columns={columns} dataSource={props.questionsData} bordered />
    )
}

export default QuestionsTable