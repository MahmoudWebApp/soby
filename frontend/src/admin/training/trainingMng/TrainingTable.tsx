import { Space, Table} from 'antd';
import TextEnAr from '../../../component/TextEnAr';
import PopconfirmDelete from '../../../component/popconfirmDelete/PopconfirmDelete';
import { useDeleteTrainingMutation } from '../../../redux/api/trainingPageApi/trainingApi';
import EditTrainingModal from './EditTrainingModal';




const TrainingTable: React.FC<{ trainingData: any[] }> = (props) => {
    const [deleteTraining, { isLoading }] = useDeleteTrainingMutation();

    const columns: any[] = [
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
            title: <TextEnAr t1={'Button'} t2={'Link'} />,
            dataIndex: "link",
            width: "50%",
            render: (text: any) => {
                return <>{text}</>;
            },
        },



        {
            title: "Action",
            dataIndex: "",
            width: "10%",
            render: (record: any) => {
                return <Space className="flex flex-col justify-center gap-y-3">
                    <EditTrainingModal trainingData={record} />
                    <PopconfirmDelete onConfirm={async () => {
                        try {
                            await deleteTraining({ training_id: record?.id })
                        } catch (err) {
                            console.log(err);

                        }

                    }} title={'Delete Book'} isLoading={isLoading} />


                </Space>
            }
        },

    ];
    return (
        <Table columns={columns} dataSource={props.trainingData} bordered />
    )
}

export default TrainingTable