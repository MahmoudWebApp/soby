import {

    Button,
    Form,
    Input, Space, message
} from "antd";
import { t } from "i18next";

import AddEditModal from "../../../component/addEditModal/AddEditModal";
import { RulesName } from "../../../utils/RulesValidation";
import { useEffect, useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useUpdateNetworkPlayListMutation } from "../../../redux/api/networkPageApi/networkPlayListApi";






const EditPlayListModal: React.FC<{ playlistData: any }> = (props) => {
    const [updatePlayList, { isSuccess, isLoading }] = useUpdateNetworkPlayListMutation();
    const [formPlayListEdit] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        if (isSuccess) {
            formPlayListEdit.resetFields()
            setIsModalVisible(false)
            formPlayListEdit.setFieldsValue(props.playlistData)
        }
    }, [formPlayListEdit, isSuccess, props.playlistData])
    useEffect(() => {
        if (isSuccess) {
            message.success("operation success")
        }
    }, [isSuccess])
   
    const onFinish = async (values: any) => {
        try {
            await formPlayListEdit.validateFields();
            const formData = new FormData();
            formData.append("playlist_id", props.playlistData?.id);
            formData.append("title_ar", values?.title_ar);
            formData.append("title_en", values?.title_en);
            formData.append("content", JSON.stringify(values?.content))
            formData.append("link", values?.link);
            await updatePlayList(formData)



        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <>



            <div className="flex flex-col gap-y-6">
                <AddEditModal
                    btnText={"Edit"}
                    title={"Edit PlayList"}
                    width={"800px"}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}

                >
                    <Form layout="vertical" form={formPlayListEdit}
                        name="edit-playlist"
                        onFinish={onFinish}
                        className="form-add-student-assessment"
                        initialValues={props.playlistData}
                    >
                        <div className="grid grid-row-2 gap-y-6">
                            <div className="grid grid-cols-2 gap-x-6">
                                <div className="flex flex-col ">
                                    <Form.Item label="Title English" name="title_en"
                                        rules={RulesName({ name: `The Field`, countChar: 50 })}

                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Title Arabic" name="title_ar"
                                        rules={RulesName({ name: `The Field`, countChar: 50 })}

                                    >
                                        <Input />
                                    </Form.Item>
                            

                                </div>
                                <div className="flex flex-col">
                                    <Form.Item label="Playlist Url" name="link"
                                        rules={RulesName({ name: `The Field`, countChar: 1024 })}

                                    >
                                        <Input />
                                    </Form.Item>
                                 

                                </div>
                            </div>
                            <div>
                                <Form.List name="content" >
                                    {(fields, { add, remove }) => (
                                        <>
                                            {fields.map(({ key, name, ...restField }) => (
                                                <div className="flex items-center  gap-x-3 mb-6" key={key}>
                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, 'content_en']}
                                                        rules={[{ required: true, message: "The Field is Required" },
                                                        { max: 1024, message: `${t("Content English")} ${t("must be less than 1024 characters.")}` }

                                                        ]}
                                                        className="w-[47%] mb-0"
                                                    >
                                                        <Input.TextArea placeholder={`${t("Content English")}`} autoSize />
                                                    </Form.Item>
                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, 'content_ar']}
                                                        rules={[{ required: true, message: "The Field is Required" },
                                                        { max: 1024, message: `${t("Content Arabic")} ${t("must be less than 1024 characters.")}` }
                                                        ]}
                                                        className="w-[47%] mb-0"
                                                    >
                                                        <Input.TextArea placeholder={`${t("Content Arabic")}`} dir="rtl" autoSize />
                                                    </Form.Item>
                                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                                </div>


                                            ))}
                                            <Form.Item>
                                                <Button type="dashed" onClick={() => add()} block
                                                    className="max-w-fit border-[#f7a833] text-[#f7a833]"
                                                    icon={<PlusOutlined />}>
                                                    {`${t("Add Content")}`}
                                                </Button>
                                            </Form.Item>
                                        </>
                                    )}
                                </Form.List>
                            </div>
                        </div>


                        <Space className="flex  justify-around">
                            <Button key="back" onClick={() => {
                                formPlayListEdit.resetFields()
                             
                                setIsModalVisible(false)
                            }} className="bg-soby-yellow-light text-white">
                                {`${t("Cancel")}`}
                            </Button>,
                            <Button key="submit" htmlType="submit" className="bg-soby-gray-blue-gray text-white"
                                loading={isLoading}
                            >
                                {`${t("Save & Send")}`}
                            </Button>
                        </Space>
                    </Form>
                </AddEditModal >

            </div>



        </>
    )
}

export default EditPlayListModal