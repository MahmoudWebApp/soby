import {

    Button,
    Form,
    Input, Space, message
} from "antd";
import { t } from "i18next";

import AddEditModal from "../../../component/addEditModal/AddEditModal";
import { RulesName } from "../../../utils/RulesValidation";
import { useEffect, useState } from "react";

import { useUpdateQuestionMutation } from "../../../redux/api/brandingPageApi/faqBrandingApi";






const EditFaqBrandingModal: React.FC<{ questionData: any }> = (props) => {
    const [updateQuestion, { isSuccess, isLoading }] = useUpdateQuestionMutation();

    const [formFaqEdit] = Form.useForm();

    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        if (isSuccess) {
            formFaqEdit.resetFields()

            setIsModalVisible(false)
            formFaqEdit.setFieldsValue(props.questionData)
        }
    }, [formFaqEdit, isSuccess, props.questionData])
    useEffect(() => {
        if (isSuccess) {
            message.success("operation success")
        }
    }, [isSuccess])

    const onFinish = async (values: any) => {
        try {
            await formFaqEdit.validateFields();
            const formData = new FormData();
            formData.append("question_id", props.questionData?.id);
            formData.append("question_ar", values?.question_ar);
            formData.append("question_en", values?.question_en);
            formData.append("answer_ar", values?.answer_ar);
            formData.append("answer_en", values?.answer_en);
            await updateQuestion(formData)



        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <>



            <div className="flex flex-col gap-y-6">
                <AddEditModal
                    btnText={"Edit"}
                    title={"Edit Question"}
                    width={"800px"}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}

                >
                    <Form layout="vertical" form={formFaqEdit}
                        name="edit-question"
                        onFinish={onFinish}
                        className="form-add-student-assessment"
                        initialValues={props.questionData}
                    >
                        <div className="grid grid-row-2 gap-y-6">
                            <div className="grid grid-cols-2 gap-x-6">
                                <div>
                                    <Form.Item label="Question English" name="question_en"
                                        rules={RulesName({ name: `The Field`, countChar: 1500 })}

                                    >
                                        <Input.TextArea />
                                    </Form.Item>
                                    <Form.Item label="Question Arabic" name="question_ar"
                                        rules={RulesName({ name: `The Field`, countChar: 1500 })}

                                    >
                                        <Input.TextArea />
                                    </Form.Item>
                                </div>
                                <div>


                                    <Form.Item label="Answer English" name="answer_en"
                                        rules={RulesName({ name: `The Field`, countChar: 1500 })}

                                    >
                                        <Input.TextArea />
                                    </Form.Item>
                                    <Form.Item label="Answer Arabic" name="answer_ar"
                                        rules={RulesName({ name: `The Field`, countChar: 1500 })}

                                    >
                                        <Input.TextArea />
                                    </Form.Item>
                                </div>




                            </div>

                        </div>


                        <Space className="flex  justify-around">
                            <Button key="back" onClick={() => {
                                formFaqEdit.resetFields()
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

export default EditFaqBrandingModal