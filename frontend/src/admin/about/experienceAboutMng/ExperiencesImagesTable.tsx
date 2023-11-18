import { Space, Table } from 'antd';

import PopconfirmDelete from '../../../component/popconfirmDelete/PopconfirmDelete';
import { useDeleteExperiencesImageMutation } from '../../../redux/api/aboutPageApi/experiencesAboutApi';






const ExperiencesImagesTable: React.FC<{ experiencesData: any[] }> = (props) => {
    const [deleteImage, { isLoading }] = useDeleteExperiencesImageMutation();
    const columns: any[] = [
        {
            title: "Image",
            dataIndex: "image",
            render: (text: any) => {
                return <img src={text} className='w-[50px] mx-auto' alt='icon' />;
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
                            await deleteImage({ image_id: record?.id })
                        } catch (err) {
                            console.log(err);

                        }

                    }} title={'Delete Image'} isLoading={isLoading} />

                </Space>
            }
        },

    ];
    return (
        <Table columns={columns} dataSource={props.experiencesData} bordered />
    )
}

export default ExperiencesImagesTable