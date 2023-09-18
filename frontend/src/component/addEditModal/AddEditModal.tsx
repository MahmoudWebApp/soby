import React, { ReactNode } from 'react';
import { Button, Modal } from 'antd';
import "./index.css"

interface IProps {
    btnText: ReactNode | string;
    title: string;
    width: string;
    titleTooltip?: string;
    modalResponse?: any;
    isModalVisible: boolean;
    setIsModalVisible: (v: boolean) => any;
    children: JSX.Element;
  

}
const AddEditModal: React.FC<IProps> = (props) => {
    const handleCancel = () => {
        props.setIsModalVisible(false)
    };
    return (
        <>
           
                {typeof (props.btnText) === "string" ? (
                    <Button onClick={
                        () => {
                            props.setIsModalVisible(true)
                        }
                    } className='add-btn w-fit px-8 py-2 bg-soby-gray-blue-gray 
                flex items-center text-white  hover:text-soby-gray-light-1
             '>
                        {props.btnText}
                    </Button >
                ) : (
                    <>{props.btnText}</>
                )}

                <Modal
                    className='admin-model'
                    title={<div className='text-sm font-bold text-soby-gray-blue-gray'>{props.title}</div>}
                    centered
                    open={props.isModalVisible}
                    onCancel={handleCancel}
                    width={props.width}
                    style={{ height: "auto" }}
                    footer={null}

                >
                    {[props.children]}
                </Modal>
            
        </>
    );
};

export default AddEditModal