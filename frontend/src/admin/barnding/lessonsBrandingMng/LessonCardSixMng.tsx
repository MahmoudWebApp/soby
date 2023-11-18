import {

    Button,
    Form,
    Input, Spin, Upload, UploadFile, UploadProps, message
} from "antd";
import { t } from "i18next";
import { RulesName } from "../../../utils/RulesValidation";
import { useEffect, useState } from "react";
import { useAddUpdateLessonMutation } from "../../../redux/api/brandingPageApi/lessonsBrandingApi";





const LessonCardSixMng: React.FC<{ lessons: any }> = (props) => {
    const [addLesson, { isSuccess, isLoading }] = useAddUpdateLessonMutation();
    const [imageFile, setImageFile] = useState<any>();
    const [formLessonsAddSix] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    useEffect(() => {
        formLessonsAddSix.setFieldsValue(props.lessons)
    }, [props.lessons])
    useEffect(() => {
        if (isSuccess) {
            formLessonsAddSix.resetFields()
            setFileList([]);
            setImageFile('')
            formLessonsAddSix.setFieldsValue(props.lessons)
        }
    }, [formLessonsAddSix, isSuccess])
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
            await formLessonsAddSix.validateFields();
            const formData = new FormData();
            formData.append("title_six_en", values?.title_six_en);
            formData.append("title_six_ar", values?.title_six_ar);
            formData.append("content_six_ar", values?.content_six_ar);
            formData.append("content_six_en", values?.content_six_en);
            formData.append("icon_six", imageFile);
            await addLesson(formData)

        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    console.log("rr", props.lessons);

    return (
        <>
            <Spin spinning={isLoading}>
                {props.lessons &&
                    <div className="flex flex-col gap-y-6 ">
                        <Form layout="vertical" form={formLessonsAddSix}
                            name="add-lesson-1"
                            onFinish={onFinish}
                            className="form-add-student-assessment"
                            initialValues={props.lessons}
                        >
                            <div className="grid grid-row-2 gap-y-6">
                                <div className="grid grid-cols-2 gap-x-6">
                                    <div className="flex flex-col ">
                                        <Form.Item label="Title English" name="title_six_en"

                                            rules={RulesName({ name: `The Field`, countChar: 50 })}

                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Title Arabic" name="title_six_ar"
                                            rules={RulesName({ name: `The Field`, countChar: 50 })}

                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item>
                                            <Upload listType="picture" maxCount={1}
                                                accept="image/*"  {...propsImage} >
                                                <Button className="bg-[#f7a833] text-white">{`${t("Upload Icon")}`}</Button>
                                            </Upload>

                                        </Form.Item>
                                     
                                        <img src={props.lessons?.icon_six}
                                         alt="" className="w-[50px] h-[50px] mb-6" />

                                    </div>
                                    <div className="flex flex-col">

                                        <Form.Item label="Description English" name="content_six_en"
                                            rules={RulesName({ name: `Description English`, countChar: 1500 })}

                                        >
                                            <Input.TextArea />
                                        </Form.Item>
                                        <Form.Item label="Description Arabic" name="content_six_ar"
                                            rules={RulesName({ name: `Description Arabic`, countChar: 1500 })}

                                        >
                                            <Input.TextArea />
                                        </Form.Item>

                                    </div>
                                </div>

                            </div>

                            <Button key="submit" htmlType="submit"
                                className="bg-soby-gray-blue-gray text-white px-12 py-4 flex items-center text-lg"
                                loading={isLoading}>
                                {`${t("Save")}`}
                            </Button>
                        </Form>
                    </div >

                }


            </Spin>



        </>
    )
}

export default LessonCardSixMng