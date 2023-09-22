import { Space, Table } from 'antd';
import TextEnAr from '../../../component/TextEnAr';
import PopconfirmDelete from '../../../component/popconfirmDelete/PopconfirmDelete';

import EditStepsBrandingModal from './EditStepsModal';
import { useDeleteStepMutation } from '../../../redux/api/brandingPageApi/stepsBrandingApi';




const StepsBrandingTable: React.FC<{ stepsData: any[] }> = (props) => {
    const [deleteStep, { isLoading }] = useDeleteStepMutation();

    const columns: any[] = [

        {
            title: <TextEnAr t1={'Title'} t2={'English'} />,
            dataIndex: "title_en",
            render: (text: any) => {
                return <><p className='text-word-dark text-sm'>{text}</p></>;
            },
        },
        {
            title: <TextEnAr t1={'Title'} t2={'Arabic'} />,
            dataIndex: "title_ar",
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
                    <EditStepsBrandingModal stepData={record} />
                    <PopconfirmDelete onConfirm={async () => {
                        try {
                            await deleteStep({ step_id: record?.id })
                        } catch (err) {
                            console.log(err);

                        }

                    }} title={'Delete Step'} isLoading={isLoading} />


                </Space>
            }
        },

    ];
    return (
        <Table columns={columns} dataSource={props.stepsData} bordered />
    )
}

export default StepsBrandingTable