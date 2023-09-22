import {

    Button,
    Form,
    Input, Space
} from "antd";
import { t } from "i18next";
import { useSendMessageMutation } from "../redux/api/formGifts/formGiftsApi";
import AddEditModal from "./addEditModal/AddEditModal";
import { RulesEmail, RulesName, RulesPhone } from "../utils/RulesValidation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";






const SendMessageForGiftModal = () => {
    const [sendMessage, { isSuccess, isLoading }] = useSendMessageMutation();
    const [formSendMessage] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            formSendMessage.resetFields()
            setIsModalVisible(false);
            navigate('/download-book-pdf')
        }
    }, [formSendMessage, isSuccess, navigate])


    const onFinish = async (values: any) => {
        try {
            await formSendMessage.validateFields();
            const formData = new FormData();
            formData.append("name", values?.name);
            formData.append("email", values?.email);
            formData.append("mobile", values?.mobile);
            formData.append("country", values?.country);
            formData.append("message", values?.message);
            await sendMessage(formData)



        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <>



            <div className="flex flex-col gap-y-6">
                <AddEditModal
                    btnText={
                        <button className={`bg-soby-yellow-light rounded-3xl xl:px-16 xl:py-3 md:py-2 md:px-8  py-1 px-3`}
                            onClick={() => setIsModalVisible(true)}
                        >
                            <span className={`text-soby-light-1 xl:text-lg md:text-sm  sm:text-xs text-[.7rem]`}>
                                {`${t("Claim Your Thank-You Gift")}`}
                            </span>
                        </button>}
                    title={`${t("Claim Your Thank-You Gift")}`}
                    width={"600px"}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}

                >
                    <Form layout="vertical" form={formSendMessage}
                        name="edit-book"
                        onFinish={onFinish}
                        className="form-add-student-assessment"
                    >

                        <Form.Item label="Name" name="name"
                            rules={RulesName({ name: `The Field`, countChar: 50 })}

                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email" name="email"
                            rules={RulesEmail()}

                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Mobile" name="mobile"
                            rules={RulesPhone()}

                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Country" name="country"
                            rules={RulesName({ name: `The Field`, countChar: 50 })}

                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Message" name="message"
                            rules={RulesName({ name: `The Field`, countChar: 1500 })}

                        >
                            <Input.TextArea />
                        </Form.Item>





                        <Space className="flex  justify-around">
                            <Button key="back" onClick={() => {
                                formSendMessage.resetFields()
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

export default SendMessageForGiftModal