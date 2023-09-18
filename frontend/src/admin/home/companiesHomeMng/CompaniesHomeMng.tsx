import {

    Button,
    Form,
    Space, Upload, UploadFile, UploadProps
} from "antd";
import { t } from "i18next";

import AddEditModal from "../../../component/addEditModal/AddEditModal";

import { useState } from "react";

import TitlePageAdmin from "../../../component/TitlePageAdmin";
import CompaniesHomeTable from "./CompaniesHomeTable";





const CompaniesHomeMng = () => {
    const [imageFile, setImageFile] = useState<any>();
    const [formCompayIconAdd] = Form.useForm();
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
            await formCompayIconAdd.validateFields();
            console.log(values);

            // const formData = new FormData();
            // formData.append("avatar", imageFile);


        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <div className="mt-12 px-12 admin-management">
            <TitlePageAdmin title={"Home Companies "} />
            <div className="flex flex-col gap-y-6">
                <AddEditModal
                    btnText={<button
                        className="bg-soby-yellow-light px-6 py-2 text-white rounded-md text-base w-fit"
                        onClick={() => setIsModalVisible(true)}>
                        Add Company Icon
                    </button>}
                    title={" Add Company Icon"}
                    width={"800px"}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}

                >
                    <Form layout="vertical" form={formCompayIconAdd}
                        name="add-company"
                        onFinish={onFinish}
                        className="form-add-student-assessment"
                    >

                        <Form.Item>
                            <Upload listType="picture" maxCount={1}
                                accept="image/*"  {...propsImage} >
                                <Button className="bg-[#f7a833] text-white">{`${t("Upload New Icon")}`}</Button>
                            </Upload>
                        </Form.Item>



                        <Space className="flex  justify-around">
                            <Button key="back" onClick={() => {
                                formCompayIconAdd.resetFields()
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
                <CompaniesHomeTable companiesData={[1]} />
            </div>

        </div>
    )
}

export default CompaniesHomeMng