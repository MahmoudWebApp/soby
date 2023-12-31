import {
    Alert,
    Button,
    Form,
    Input, Space, Upload, UploadFile, UploadProps, message
} from "antd";
import { t } from "i18next";

import AddEditModal from "../../../component/addEditModal/AddEditModal";
import { RulesName } from "../../../utils/RulesValidation";
import { useEffect, useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useUpdateSlideMutation } from "../../../redux/api/homePageApi/sliderHomeApi";



const EditSliderHeroModal: React.FC<{ sliderData: any }> = (props) => {
    const [updateSlide, { isSuccess, isLoading }] = useUpdateSlideMutation();
    const [imageFile, setImageFile] = useState<any>();
    const [formHeroEdit] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        if (isSuccess) {
            formHeroEdit.resetFields()
            setFileList([]);
            setImageFile('')
            setIsModalVisible(false)
            formHeroEdit.setFieldsValue(props.sliderData)
        }
    }, [formHeroEdit, isSuccess, props.sliderData])
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
            await formHeroEdit.validateFields();
            const formData = new FormData();
            formData.append("hero_id", props.sliderData?.id);
            formData.append("title_ar", values?.title_ar);
            formData.append("title_en", values?.title_en);
            formData.append("subtitle_ar", values?.subtitle_ar);
            formData.append("subtitle_en", values?.subtitle_en);
            formData.append("profile_link", values?.profile_link );
            formData.append("videos_link", values?.videos_link );
            formData.append("brochure", values?.brochure );
            formData.append("link", values?.link );
            formData.append("image", imageFile);
            formData.append("content", JSON.stringify(values?.content))
            await updateSlide(formData)

        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (

        <div className="flex flex-col gap-y-6 ">
            <AddEditModal
                btnText={"Edit"}
                title={"Edit Slide"}
                width={"800px"}
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}

            >
                <Form layout="vertical" form={formHeroEdit}
                    name="edit-hero"
                    onFinish={onFinish}
                    className="form-add-student-assessment"
                    initialValues={props.sliderData}
                >
                    <div className="grid grid-row-2 gap-y-6">
                        <div className="grid grid-cols-2 gap-x-6">
                            <div className="flex flex-col ">
                                <Form.Item label="Title English" name="title_en"
                                    rules={RulesName({ name: `The Field`, countChar: 128 })}

                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Title Arabic" name="title_ar"
                                    rules={RulesName({ name: `The Field`, countChar: 128})}

                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item label="Sub Title English" name="subtitle_en"
                                    rules={RulesName({ name: `The Field`, countChar: 128 })}

                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Sub Title Arabic" name="subtitle_ar"
                                    rules={RulesName({ name: `The Field`, countChar: 128 })}

                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item>
                                    <Upload listType="picture" maxCount={1}
                                        accept="image/*"  {...propsImage} >
                                        <Button className="bg-[#f7a833] text-white">{`${t("Upload Image Slide")}`}</Button>
                                    </Upload>
                                </Form.Item>
                            </div>
                            <div className="flex flex-col">

                                <Alert
                                    message="the buttons (profile , videos) will show in slide One only"
                                    type="info"

                                    className="mb-3"
                                />
                                <Form.Item label="Profile Button Url" name="profile_link"


                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Videos Button Url" name="videos_link"


                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Brochure Button Url" name="brochure"


                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Link Button Url" name="link"


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
                                            <div className="flex items-center  gap-x-3 mb-6">
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'content_en']}
                                                    rules={[{ required: true, message: `${t("The Field")}` },
                                                    { max: 1024, message: `${t("Content English")} ${t("must be less than 1024 characters.")}` }

                                                    ]}
                                                    className="w-[47%] mb-0"
                                                >
                                                    <Input.TextArea placeholder={`${t("Content English")}`} />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'content_ar']}
                                                    rules={[{ required: true, message: `${t("The Field")}` },
                                                    { max: 1024, message: `${t("Content Arabic")} ${t("must be less than 1024 characters.")}` }
                                                    ]}
                                                    className="w-[47%] mb-0"
                                                >
                                                    <Input.TextArea placeholder={`${t("Content Arabic")}`} />
                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                            </div>


                                        ))}
                                        <Form.Item>
                                            <Button type="dashed" onClick={() => add()} block
                                                icon={<PlusOutlined />}
                                                className="max-w-fit border-[#f7a833] text-[#f7a833]"
                                            >
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
                            formHeroEdit.resetFields()
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
    )
}

export default EditSliderHeroModal