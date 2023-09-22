import {

    Button,
    Form,
    Input, Space, message
} from "antd";
import { t } from "i18next";

import AddEditModal from "../../../component/addEditModal/AddEditModal";
import { RulesName } from "../../../utils/RulesValidation";
import { useEffect, useState } from "react";
import { useUpdateStepMutation } from "../../../redux/api/brandingPageApi/stepsBrandingApi";






const EditStepsBrandingModal: React.FC<{ stepData: any }> = (props) => {
    const [updateStep, { isSuccess, isLoading }] = useUpdateStepMutation();

    const [formStepEdit] = Form.useForm();

    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        if (isSuccess) {
            formStepEdit.resetFields()

            setIsModalVisible(false)
        }
    }, [formStepEdit, isSuccess])
    useEffect(() => {
        if (isSuccess) {
            message.success("operation success")
        }
    }, [isSuccess])

    const onFinish = async (values: any) => {
        try {
            await formStepEdit.validateFields();
            const formData = new FormData();
            formData.append("step_id", props.stepData?.id);
            formData.append("step_ar", values?.step_ar);
            formData.append("step_en", values?.step_en);

            await updateStep(formData)



        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <>



            <div className="flex flex-col gap-y-6">
                <AddEditModal
                    btnText={"Edit"}
                    title={"Edit Step"}
                    width={"800px"}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}

                >
                    <Form layout="vertical" form={formStepEdit}
                        name="edit-step"
                        onFinish={onFinish}
                        className="form-add-student-assessment"
                        initialValues={props.stepData}
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
                                formStepEdit.resetFields()
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

export default EditStepsBrandingModal