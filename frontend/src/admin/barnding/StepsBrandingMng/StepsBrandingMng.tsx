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
import StepsBrandingTable from "./StepsBrandingTable";
import { useAddStepMutation, useGetAllStepsQuery } from "../../../redux/api/brandingPageApi/stepsBrandingApi";





const StepsBrandingMng = () => {
    const { stepsData, isLoadingData } = useGetAllStepsQuery<{ stepsData: any[], isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            stepsData: data?.steps,
            isLoadingData: isLoading
        }),
    });
    const [addStep, { isSuccess, isLoading }] = useAddStepMutation();
    const [formStepAdd] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        if (isSuccess) {
            formStepAdd.resetFields()
            setIsModalVisible(false)
        }
    }, [formStepAdd, isSuccess])
    useEffect(() => {
        if (isSuccess) {
            message.success("operation success")
        }
    }, [isSuccess])



    const onFinish = async (values: any) => {
        try {
            await formStepAdd.validateFields();
            const formData = new FormData();
            formData.append("title_ar", values?.title_ar);
            formData.append("title_en", values?.title_en);
            await addStep(formData)

        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <>

            <div className="mt-12 px-12 admin-management">
                <TitlePageAdmin title={"Branding Steps"} />
                <Spin spinning={isLoading || isLoadingData}>


                    <div className="flex flex-col gap-y-6">
                        <AddEditModal
                            btnText={<button
                                className="bg-soby-yellow-light px-6 py-2 text-white rounded-md text-base w-fit"
                                onClick={() => setIsModalVisible(true)}>
                                Add Step
                            </button>}
                            title={"Add Steps"}
                            width={"800px"}
                            isModalVisible={isModalVisible}
                            setIsModalVisible={setIsModalVisible}

                        >
                            <Form layout="vertical" form={formStepAdd}
                                name="add-step"
                                onFinish={onFinish}
                                className="form-add-student-assessment"
                            >
                                <Form.Item label="Title English" name="title_en"
                                    rules={RulesName({ name: `The Field`, countChar: 1500 })}

                                >
                                    <Input.TextArea />
                                </Form.Item>
                                <Form.Item label="Title Arabic" name="title_ar"
                                    rules={RulesName({ name: `The Field`, countChar: 1500 })}

                                >
                                    <Input.TextArea />
                                </Form.Item>

                                <Space className="flex  justify-around">
                                    <Button key="back" onClick={() => {
                                        formStepAdd.resetFields()

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
                        < StepsBrandingTable stepsData={stepsData?.map(s => {
                            return {
                                ...s, key: `${s?.id}-key`
                            }
                        })} />
                    </div>
                </Spin>
            </div>

        </>
    )
}

export default StepsBrandingMng

