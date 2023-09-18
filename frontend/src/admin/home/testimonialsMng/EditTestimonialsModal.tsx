import {

    Button,
    Form,
    Input, Space, Upload, UploadFile, UploadProps
} from "antd";
import { t } from "i18next";

import AddEditModal from "../../../component/addEditModal/AddEditModal";
import { RulesName } from "../../../utils/RulesValidation";
import { useEffect, useState } from "react";
import { ITestimonialsProps } from "../../../models/Testimonilas.model";
import { useAddTestimonialMutation } from "../../../redux/api/homePageApi/TestimonialsHomeApi";





const EditTestimonialsModal: React.FC<{ testimonialData: ITestimonialsProps }> = (props) => {
    const [addTestimonial, { isSuccess, isLoading }] = useAddTestimonialMutation();
    const [imageFile, setImageFile] = useState<any>();
    const [formTestimonialsEdit] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        if (isSuccess) {
            formTestimonialsEdit.resetFields()
            setFileList([]);
            setImageFile('')
            setIsModalVisible(false)
        }
    }, [formTestimonialsEdit, isSuccess])
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
            await formTestimonialsEdit.validateFields();
            const formData = new FormData();
            formData.append("id", props.testimonialData?.id?.toString())
            formData.append("name_ar", values?.name_ar);
            formData.append("name_en", values?.name_en);
            formData.append("position_ar", values?.position_ar);
            formData.append("position_en", values?.position_en);
            formData.append("content_ar", values?.content_ar);
            formData.append("content_en", values?.content_en);
            formData.append("image", imageFile);
            await addTestimonial(formData)


        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <>


            <div className="flex flex-col gap-y-6">
                <AddEditModal
                    btnText={"Edit"}
                    title={"Edit Testimonial"}
                    width={"800px"}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}

                >
                    <Form layout="vertical" form={formTestimonialsEdit}
                        name="edit-testimoials"
                        onFinish={onFinish}
                        className="form-add-student-assessment"
                        initialValues={props.testimonialData}
                    >
                        <div className="grid grid-row-2 gap-y-6">
                            <div className="grid grid-cols-2 gap-x-6">
                                <div className="flex flex-col ">
                                    <Form.Item label="Name English" name="name_ar"
                                        rules={RulesName({ name: `Name English`, countChar: 50 })}

                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Name Arabic" name="name_en"
                                        rules={RulesName({ name: `Name Arabic`, countChar: 50 })}

                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="Position English" name="position_ar"
                                        rules={RulesName({ name: `Position English`, countChar: 50 })}

                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Position Arabic" name="position_en"
                                        rules={RulesName({ name: `Position Arabic`, countChar: 50 })}

                                    >
                                        <Input />
                                    </Form.Item>

                                </div>
                                <div className="flex flex-col">

                                    <Form.Item label="Description English" name="content_en"
                                        rules={RulesName({ name: `Description English`, countChar: 1500 })}

                                    >
                                        <Input.TextArea />
                                    </Form.Item>
                                    <Form.Item label="Description Arabic" name="content_ar"
                                        rules={RulesName({ name: `Description Arabic`, countChar: 1500 })}

                                    >
                                        <Input.TextArea />
                                    </Form.Item>
                                    <Form.Item>
                                        <Upload listType="picture" maxCount={1}
                                            accept="image/*"  {...propsImage} >
                                            <Button className="bg-[#f7a833] text-white">{`${t("Upload Image Testimonials")}`}</Button>
                                        </Upload>
                                    </Form.Item>
                                </div>
                            </div>

                        </div>


                        <Space className="flex  justify-around">
                            <Button key="back" onClick={() => {
                                formTestimonialsEdit.resetFields()
                                setFileList([]);
                                setImageFile('')
                                setIsModalVisible(false)
                            }} className="bg-soby-yellow-light text-white">
                                {`${t("Cancel")}`}
                            </Button>,
                            <Button key="submit" htmlType="submit" className="bg-soby-gray-blue-gray text-white" loading={isLoading}>
                                {`${t("Save & Send")}`}
                            </Button>
                        </Space>
                    </Form>
                </AddEditModal>

            </div>


        </>
    )
}

export default EditTestimonialsModal