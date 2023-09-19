import {

    Button,
    Form,
    Input, Space,
    //  Upload, UploadFile, UploadProps
} from "antd";
import { t } from "i18next";

import AddEditModal from "../../../component/addEditModal/AddEditModal";

import { useEffect, useState } from "react";
import TestimonialsVideosTable from "./TestimonialsVideosTable";
import TitlePageAdmin from "../../../component/TitlePageAdmin";
import { RulesName } from "../../../utils/RulesValidation";
import { useAddTestimonialVideoMutation, useGetAllTestimonialsVideosQuery } from "../../../redux/api/homePageApi/testimoialsVideos";





const TestimonialsVideosMng = () => {
    const { testimonialsVideos } = useGetAllTestimonialsVideosQuery<{ testimonialsVideos: any[] }>(undefined, {
        selectFromResult: ({ data }) => ({
            testimonialsVideos: data?.data ?? [],
        }),
    });
    const [addTestimonialVideo, { isSuccess, isLoading }] = useAddTestimonialVideoMutation();
    const [formTestimonialsVideosAdd] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        if (isSuccess) {
            formTestimonialsVideosAdd.resetFields()
            setIsModalVisible(false)
        }
    }, [formTestimonialsVideosAdd, isSuccess])
    const onFinish = async (values: any) => {
        try {
            await formTestimonialsVideosAdd.validateFields();

            const formData = new FormData();
            formData.append("video_link", values?.video_link);
            await addTestimonialVideo(formData)

        } catch (e) {
            console.log("onEditRow ", e);
        }
    }

    return (
        <div className="mt-12 px-12 admin-management">
            <TitlePageAdmin title={"Testimonials Videos"} />
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

                        <Form.Item label="Video Link" name="video_link"
                            rules={RulesName({ name: `Video Link`, countChar: 1500 })}

                        >
                            <Input.TextArea />
                        </Form.Item>


                        <Space className="flex  justify-around">
                            <Button key="back" onClick={() => {
                                formTestimonialsVideosAdd.resetFields()
                                setIsModalVisible(false)
                            }} className="bg-soby-yellow-light text-white">
                                {`${t("Cancel")}`}
                            </Button>,
                            <Button key="submit" htmlType="submit" className="bg-soby-gray-blue-gray text-white"
                                loading={isLoading}>
                                {`${t("Save & Send")}`}
                            </Button>
                        </Space>
                    </Form>
                </AddEditModal >
                <TestimonialsVideosTable testimonialsVideosData={testimonialsVideos?.map(t => {
                    return {
                        ...t, key: `${t.id}-key`
                    }
                })} />
            </div>

        </div>
    )
}

export default TestimonialsVideosMng