import {

    Button,
    Form,
    Input, Space, Spin, message
} from "antd";
import { t } from "i18next";

import AddEditModal from "../../../component/addEditModal/AddEditModal";
import { RulesName } from "../../../utils/RulesValidation";
import { useEffect, useState } from "react";
import TitlePageAdmin from "../../../component/TitlePageAdmin";
import { useAddQuestionMutation, useGetAllQuestionsQuery } from "../../../redux/api/brandingPageApi/faqBrandingApi";
import FaqBrandingTable from "./FaqBrandingTable";





const FaqBrandingMng = () => {
    const { questionsData, isLoadingData } = useGetAllQuestionsQuery<{ questionsData: any[], isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            questionsData: data?.data,
            isLoadingData: isLoading
        }),
    });
    const [addQuestion, { isSuccess, isLoading }] = useAddQuestionMutation();
    const [formFaqAdd] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        if (isSuccess) {
            formFaqAdd.resetFields()
            setIsModalVisible(false)
        }
    }, [formFaqAdd, isSuccess])
    useEffect(() => {
        if (isSuccess) {
            message.success("operation success")
        }
    }, [isSuccess])

 

    const onFinish = async (values: any) => {
        try {
            await formFaqAdd.validateFields();
            const formData = new FormData();
            formData.append("question_ar", values?.question_ar);
            formData.append("question_en", values?.question_en);
            formData.append("answer_ar", values?.answer_ar);
            formData.append("answer_en", values?.answer_en);
            await addQuestion(formData)

        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <>

            <div className="mt-12 px-12 admin-management">
                <TitlePageAdmin title={"Faq Questions"} />
                <Spin spinning={isLoading || isLoadingData}>


                    <div className="flex flex-col gap-y-6">
                        <AddEditModal
                            btnText={<button
                                className="bg-soby-yellow-light px-6 py-2 text-white rounded-md text-base w-fit"
                                onClick={() => setIsModalVisible(true)}>
                                Add Question
                            </button>}
                            title={"Add Question"}
                            width={"800px"}
                            isModalVisible={isModalVisible}
                            setIsModalVisible={setIsModalVisible}

                        >
                            <Form layout="vertical" form={formFaqAdd}
                                name="add-question"
                                onFinish={onFinish}
                                className="form-add-student-assessment"
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
                                        formFaqAdd.resetFields()
                                      
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
                        < FaqBrandingTable questionsData={questionsData?.map(q => {
                            return {
                                ...q, key: `${q?.id}-key`
                            }
                        })} />
                    </div>
                </Spin>
            </div>

        </>
    )
}

export default FaqBrandingMng

