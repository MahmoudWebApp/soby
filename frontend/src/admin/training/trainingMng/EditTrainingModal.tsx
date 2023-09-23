import {

    Button,
    Form,
    Input, Space,  message
} from "antd";
import { t } from "i18next";

import AddEditModal from "../../../component/addEditModal/AddEditModal";
import { RulesName,  } from "../../../utils/RulesValidation";
import { useEffect, useState } from "react";
import { useUpdateTrainingMutation } from "../../../redux/api/trainingPageApi/trainingApi";






const EditBooksAboutModal: React.FC<{ trainingData: any }> = (props) => {
    const [updateTraining, { isSuccess, isLoading }] = useUpdateTrainingMutation();
    const [formTrainingEdit] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        if (isSuccess) {
            formTrainingEdit.resetFields()
         
            setIsModalVisible(false)
            formTrainingEdit.setFieldsValue(props.trainingData)
        }
    }, [formTrainingEdit, isSuccess, props.trainingData])
    useEffect(() => {
        if (isSuccess) {
            message.success("operation success")
        }
    }, [isSuccess])
 
    const onFinish = async (values: any) => {
        try {
            await formTrainingEdit.validateFields();
            const formData = new FormData();
            formData.append("trainer_id", props.trainingData?.id);
            formData.append("title_ar", values?.title_ar);
            formData.append("title_en", values?.title_en);
            formData.append("link", values?.link);
            await updateTraining(formData)



        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <>



            <div className="flex flex-col gap-y-6">
                <AddEditModal
                    btnText={"Edit"}
                    title={"Edit Book"}
                    width={"800px"}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}

                >
                    <Form layout="vertical" form={formTrainingEdit}
                        name="edit-book"
                        onFinish={onFinish}
                        className="form-add-student-assessment"
                        initialValues={props.trainingData}
                    >
                       
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

                                

                              
                                    <Form.Item label="Button Url" name="link"
                                        rules={RulesName({ name: `The Field`, countChar: 1024 })}

                                    >
                                        <Input.TextArea />
                                    </Form.Item>
                                

                         


                        <Space className="flex  justify-around">
                            <Button key="back" onClick={() => {
                                formTrainingEdit.resetFields()
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

export default EditBooksAboutModal