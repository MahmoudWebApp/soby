
import { Button, Modal, Table } from 'antd';
import { useState } from 'react';
import TextEnAr from '../../../component/TextEnAr';

const ContentSliderModal: React.FC<{ contents: any[] }> = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleCancel = () => {
        setIsModalVisible(false)
    };
    const columns: any[] = [

        {
            title: <TextEnAr t1={'Content'} t2={'English'} />,
            dataIndex: "content_en",
            width: "50%",
            render: (text: any) => {
                return <><p className='text-word-dark text-xs'>{text}</p></>;
            },
        },

        {
            title: <TextEnAr t1={'Content'} t2={'Arabic'} />,
            dataIndex: "content_ar",
            width: "50%",
            render: (text: any) => {
                return <><p className='text-word-dark text-xs'>{text}</p></>;
            },
        },




    ];
    return (
        <>

            <Button onClick={
                () => {
                    setIsModalVisible(true)
                }
            } className='add-btn w-fit px-4 py-2 bg-soby-yellow-dark 
                flex items-center text-white  hover:text-soby-gray-light-1
             '>
                Content
            </Button >


            <Modal
                className='admin-model'
                title={<div className='text-sm font-bold text-soby-gray-blue-gray'>Contents</div>}
                centered
                open={isModalVisible}
                onCancel={handleCancel}
                width={1000}
                style={{ height: "auto" }}
                footer={null}

            >
                <Table columns={columns} dataSource={props.contents} bordered />
            </Modal>

        </>
    );
};

export default ContentSliderModal