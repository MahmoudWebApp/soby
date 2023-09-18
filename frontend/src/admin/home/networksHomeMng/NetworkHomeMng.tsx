import {

    Button,
    Form,
    Input, Space, Upload, UploadFile, UploadProps
} from "antd";
import { t } from "i18next";

import AddEditModal from "../../../component/addEditModal/AddEditModal";
import { RulesName } from "../../../utils/RulesValidation";
import { useState } from "react";

import TitlePageAdmin from "../../../component/TitlePageAdmin";
import NetworksHomeTable from "./NetworkHomeTable";




const NetworksHomeMng = () => {
    const [imageFile, setImageFile] = useState<any>();
    const [formNetworksHomeAdd] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false)
    const propsImage: UploadProps = {
        onChange(info) {
            setFileList(info.fileList);
            setImageFile(info.file)
        },
        onRemove: file => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: file => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
        progress: {
            strokeColor: {
                '0%': '#108ee9',
                '100%': '#87d068',
            },
            strokeWidth: 3,
            format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
        },
    };

    const onFinish = async (values: any) => {
        try {
            await formNetworksHomeAdd.validateFields();
            console.log(values);

            const formData = new FormData();
            formData.append("avatar", imageFile);


        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <>

            <div className="mt-12 px-12 admin-management">
                <TitlePageAdmin title={"Home Networks"} />
                <div className="flex flex-col gap-y-6">
                    <AddEditModal
                        btnText={<button
                            className="bg-soby-yellow-light px-6 py-2 text-white rounded-md text-base w-fit"
                            onClick={() => setIsModalVisible(true)}>
                            Add Network
                        </button>}
                        title={"Add Network"}
                        width={"800px"}
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}

                    >
                        <Form layout="vertical" form={formNetworksHomeAdd}
                            name="add-hero"
                            onFinish={onFinish}
                            className="form-add-student-assessment"
                        >
                            <div className="grid grid-row-2 gap-y-6">
                                <div className="grid grid-cols-2 gap-x-6">
                                    <div className="flex flex-col ">
                                        <Form.Item label="Title English" name="title_ar"
                                            rules={RulesName({ name: `The Field`, countChar: 50 })}

                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Title Arabic" name="title_en"
                                            rules={RulesName({ name: `The Field`, countChar: 50 })}

                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item>
                                            <Upload listType="picture" maxCount={1}
                                                accept="image/*"  {...propsImage} >
                                                <Button className="bg-[#f7a833] text-white">{`${t("Upload Icon")}`}</Button>
                                            </Upload>
                                        </Form.Item>

                                    </div>
                                    <div className="flex flex-col">
                                        <Form.Item label="Button Url" name="link"
                                            rules={RulesName({ name: `The Field`, countChar: 1024 })}

                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Description English" name="content_en"
                                            rules={RulesName({ name: `The Field`, countChar: 1500 })}

                                        >
                                            <Input.TextArea />
                                        </Form.Item>
                                        <Form.Item label="Description Arabic" name="content_ar"
                                            rules={RulesName({ name: `The Field`, countChar: 1500 })}

                                        >
                                            <Input.TextArea />
                                        </Form.Item>

                                    </div>
                                </div>

                            </div>


                            <Space className="flex  justify-around">
                                <Button key="back" onClick={() => {
                                    formNetworksHomeAdd.resetFields()
                                    setFileList([]);
                                    setImageFile('')
                                    setIsModalVisible(false)
                                }} className="bg-soby-yellow-light text-white">
                                    {`${t("Cancel")}`}
                                </Button>,
                                <Button key="submit" htmlType="submit" className="bg-soby-gray-blue-gray text-white">
                                    {`${t("Save & Send")}`}
                                </Button>
                            </Space>
                        </Form>
                    </AddEditModal >
                    <NetworksHomeTable networksData={[1]} />
                </div>

            </div>

        </>
    )
}

export default NetworksHomeMng