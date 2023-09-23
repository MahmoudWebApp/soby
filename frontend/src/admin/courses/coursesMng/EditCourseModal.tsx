import {

    Button,
    Form,
    Input, Space, Upload, UploadFile, UploadProps, message
} from "antd";
import { t } from "i18next";

import AddEditModal from "../../../component/addEditModal/AddEditModal";
import { RulesName } from "../../../utils/RulesValidation";
import { useEffect, useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useUpdateCourseMutation } from "../../../redux/api/coursesPageApi/coursesApi";






const EditCoursesModal: React.FC<{ courseData: any }> = (props) => {
    const [updateCourse, { isSuccess, isLoading }] = useUpdateCourseMutation();
    const [imageFile, setImageFile] = useState<any>();
    const [formCourseEdit] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        if (isSuccess) {
            formCourseEdit.resetFields()
            setFileList([]);
            setImageFile('')
            setIsModalVisible(false)
        }
    }, [formCourseEdit, isSuccess])
    useEffect(() => {
        if (isSuccess) {
            message.success("operation success")
        }
    }, [isSuccess])
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
            await formCourseEdit.validateFields();
            const formData = new FormData();
            formData.append("course_id", props.courseData?.id);
            formData.append("image", imageFile ?? null);
            formData.append("name_ar", values?.name_ar);
            formData.append("name_en", values?.name_en);
            formData.append("content", JSON.stringify(values?.content))
            formData.append("link", values?.link);
            await updateCourse(formData)



        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <>



            <div className="flex flex-col gap-y-6">
                <AddEditModal
                    btnText={"Edit"}
                    title={"Edit Course"}
                    width={"800px"}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}

                >
                    <Form layout="vertical" form={formCourseEdit}
                        name="edit-course"
                        onFinish={onFinish}
                        className="form-add-student-assessment"
                        initialValues={props.courseData}
                    >
                        <div className="grid grid-row-2 gap-y-6">
                            <div className="grid grid-cols-2 gap-x-6">
                                <div className="flex flex-col ">
                                    <Form.Item label="Title English" name="name_en"
                                        rules={RulesName({ name: `The Field`, countChar: 50 })}

                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Title Arabic" name="name_ar"
                                        rules={RulesName({ name: `The Field`, countChar: 50 })}

                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item>
                                        <Upload listType="picture" maxCount={1}
                                            accept="image/*"  {...propsImage} >
                                            <Button className="bg-[#f7a833] text-white">{`${t("Upload Image")}`}</Button>
                                        </Upload>
                                    </Form.Item>

                                </div>
                                <div className="flex flex-col">
                                    <Form.Item label="Button Url" name="link"
                                        rules={RulesName({ name: `The Field`, countChar: 1024 })}

                                    >
                                        <Input />
                                    </Form.Item>


                                </div>
                            </div>
                            <div>
                                <div>
                                    <Form.List name="content" >
                                        {(fields, { add, remove }) => (
                                            <>
                                                {fields.map(({ key, name, ...restField }) => (
                                                    <div className="flex items-center  gap-x-3 mb-6" key={key}>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'content_en']}
                                                            rules={[{ required: true },
                                                            { max: 1024, message: `${t("Content English")} ${t("must be less than 1024 characters.")}` }

                                                            ]}
                                                            className="w-[47%] mb-0"
                                                        >
                                                            <Input.TextArea placeholder={`${t("Content English")}`} autoSize />
                                                        </Form.Item>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'content_ar']}
                                                            rules={[{ required: true },
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
                        </div>


                        <Space className="flex  justify-around">
                            <Button key="back" onClick={() => {
                                formCourseEdit.resetFields()
                                setFileList([]);
                                setImageFile('')
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

export default EditCoursesModal