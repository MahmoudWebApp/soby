import {

    Button,
    Form,
    Input, Space, Upload, UploadFile, UploadProps
} from "antd";
import { t } from "i18next";

import AddEditModal from "../../../component/addEditModal/AddEditModal";

import { useState } from "react";
import TestimonialsVideosTable from "./TestimonialsVideosTable";
import TitlePageAdmin from "../../../component/TitlePageAdmin";





const TestimonialsVideosMng = () => {
    const [imageFile, setImageFile] = useState<any>();
    const [formTestimonialsVideosAdd] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false)
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
            await formTestimonialsVideosAdd.validateFields();
            console.log(values);

            // const formData = new FormData();
            // formData.append("avatar", imageFile);


        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <div className="mt-12 px-12 admin-management">
             <TitlePageAdmin title={"Testimonials Videos"}/>
            <div className="flex flex-col gap-y-6">
                <AddEditModal
                    btnText={<button
                        className="bg-soby-yellow-light px-6 py-2 text-white rounded-md text-base w-fit"
                        onClick={() => setIsModalVisible(true)}>
                        Add Testimonial Video
                    </button>}
                    title={"Add Testimonial Video"}
                    width={"800px"}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}

                >
                    <Form layout="vertical" form={formTestimonialsVideosAdd}
                        name="add-video-testimonials"
                        onFinish={onFinish}
                        className="form-add-student-assessment"
                    >

                        <Form.Item>
                            <Upload listType="picture" maxCount={1}
                                accept="image/*"  {...propsImage} >
                                <Button className="bg-[#f7a833] text-white">{`${t("Upload Image Testimonials")}`}</Button>
                            </Upload>
                        </Form.Item>



                        <Space className="flex  justify-around">
                            <Button key="back" onClick={() => {
                                formTestimonialsVideosAdd.resetFields()
                                setFileList([]);
                                setImageFile('')
                                setIsModalVisible(false)
                            }} className="bg-soby-yellow-light text-white">
                                {`${t("Cancel")}`}
                            </Button>,
                            <Button key="submit" htmlType="submit" className="bg-soby-gray-blue-gray text-white">
                                {`${t("Save & Send")}`}
                            </Button>
                        </Space>
                    </Form>
                </AddEditModal >
                <TestimonialsVideosTable testimonialsVideosData={[]} />
            </div>

        </div>
    )
}

export default TestimonialsVideosMng