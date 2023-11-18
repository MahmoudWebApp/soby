import {

    Button,
    Form,
    Input, Space, Spin,message
} from "antd";
import { t } from "i18next";

import AddEditModal from "../../../component/addEditModal/AddEditModal";
import { RulesName} from "../../../utils/RulesValidation";
import { useEffect, useState } from "react";
import TitlePageAdmin from "../../../component/TitlePageAdmin";
import { useAddTrainingMutation, useGetAllTrainingsQuery } from "../../../redux/api/trainingPageApi/trainingApi";
import TrainingTable from "./TrainingTable";




const TrainingMng = () => {
    const { trainings, isLoadingData } = useGetAllTrainingsQuery<{ trainings: any[], isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data , isLoading }) => ({
            trainings: data?.data,
            isLoadingData: isLoading
        }),
    });
    const [addTraining, { isSuccess, isLoading }] = useAddTrainingMutation();
    
    const [formTrainingAdd] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        if (isSuccess) {
            formTrainingAdd.resetFields()
            setIsModalVisible(false)
        }
    }, [formTrainingAdd, isSuccess])
    useEffect(() => {
        if (isSuccess) {
            message.success("operation success")
        }
    }, [isSuccess])

 
    const onFinish = async (values: any) => {
        try {
            await formTrainingAdd.validateFields();

            const formData = new FormData();
            formData.append("title_ar", values?.title_ar);
            formData.append("title_en", values?.title_en);
            formData.append("link", values?.link);
            await addTraining(formData)

        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <>

            <div className="mt-12 px-12 admin-management">
                <TitlePageAdmin title={"Training"} />
                <Spin spinning={isLoading || isLoadingData}>


                    <div className="flex flex-col gap-y-6">
                        <AddEditModal
                            btnText={<button
                                className="bg-soby-yellow-light px-6 py-2 text-white rounded-md text-base w-fit"
                                onClick={() => setIsModalVisible(true)}>
                                Add Training
                            </button>}
                            title={"Add Training"}
                            width={"800px"}
                            isModalVisible={isModalVisible}
                            setIsModalVisible={setIsModalVisible}

                        >
                            <Form layout="vertical" form={formTrainingAdd}
                                name="add-book"
                                onFinish={onFinish}
                                className="form-add-student-assessment"
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
                                        formTrainingAdd.resetFields()
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
                        <TrainingTable trainingData={trainings?.map(t => {
                            return {
                                ...t, key: `${t?.id}-key`
                            }
                        })} />
                    </div>
                </Spin>
            </div>

        </>
    )
}

export default TrainingMng

