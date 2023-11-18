import {

    Button,
    Form,
    Space, Spin, Upload, UploadFile, UploadProps, message
} from "antd";
import { t } from "i18next";

import AddEditModal from "../../../component/addEditModal/AddEditModal";

import { useEffect, useState } from "react";

import TitlePageAdmin from "../../../component/TitlePageAdmin";
import { useAddExperiencesImageMutation, useGetAllExperiencesTextsQuery } from "../../../redux/api/aboutPageApi/experiencesAboutApi";
import ExperiencesImagesTable from "./ExperiencesImagesTable";





const ExperiencesAboutImagesMng = () => {
    const { experiencesTextData, isLoadingData } = useGetAllExperiencesTextsQuery<{ experiencesTextData: any, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
          isLoadingData: isLoading,
          experiencesTextData: data?.images
        }),
      });
    const [addExperienceImage, { isSuccess, isLoading }] = useAddExperiencesImageMutation();
    const [imageFile, setImageFile] = useState<any>();
    const [formExperienceImageAdd] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        if (isSuccess) {
            formExperienceImageAdd.resetFields()
            setFileList([]);
            setImageFile('')
            setIsModalVisible(false)
        }
    }, [formExperienceImageAdd, isSuccess])
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
            await formExperienceImageAdd.validateFields();
            console.log(values);
            const formData = new FormData();
            formData.append("image", imageFile);
            await addExperienceImage(formData)

        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    console.log(experiencesTextData);
    
    return (
        <div className="mt-12 px-12 admin-management">
            <TitlePageAdmin title={"Imges Slider "} />
            <Spin spinning={isLoadingData || isLoading}>
                <div className="flex flex-col gap-y-6">
                    <AddEditModal
                        btnText={<button
                            className="bg-soby-yellow-light px-6 py-2 text-white rounded-md text-base w-fit"
                            onClick={() => setIsModalVisible(true)}>
                            Add Image
                        </button>}
                        title={" Add Image"}
                        width={"400px"}
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}

                    >
                        <Form layout="vertical" form={formExperienceImageAdd}
                            name="add-experince-image"
                            onFinish={onFinish}
                            className="form-add-student-assessment"
                        >

                            <Form.Item>
                                <Upload listType="picture" maxCount={1}
                                    accept="image/*"  {...propsImage} >
                                    <Button className="bg-[#f7a833] text-white">{`${t("Upload New Image")}`}</Button>
                                </Upload>
                            </Form.Item>



                            <Space className="flex  justify-around">
                                <Button key="back" onClick={() => {
                                    formExperienceImageAdd.resetFields()
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
                    </AddEditModal >
              <ExperiencesImagesTable experiencesData={experiencesTextData?.map((c:any) => {
                        return {
                            ...c, key: `${c.id}-key`
                        }
                    })} /> 
                </div>
            </Spin>
        </div>
    )
}

export default ExperiencesAboutImagesMng