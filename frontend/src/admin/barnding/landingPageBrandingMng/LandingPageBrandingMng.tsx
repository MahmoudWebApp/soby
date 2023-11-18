import {

    Button,
    Form,
    Input, Spin, Upload, UploadFile, UploadProps, message
} from "antd";
import { t } from "i18next";

import { RulesName } from "../../../utils/RulesValidation";
import { useEffect, useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import TitlePageAdmin from "../../../component/TitlePageAdmin";
import { useAddUpdateLandingPageBrandingMutation, useGetLandingPageBrandingQuery } from "../../../redux/api/brandingPageApi/landingPageBrandingApi";




const LandingPageMng = () => {
    const { landingPageData, isLoadingData } = useGetLandingPageBrandingQuery<{ landingPageData: any, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            landingPageData: data?.data,
            isLoadingData: isLoading
        }),
    });
    const [addUpdateLandingPage, { isSuccess, isLoading }] = useAddUpdateLandingPageBrandingMutation();
    const [imageFile, setImageFile] = useState<any>();
    const [formLandingPageAdd] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    useEffect(() => {
        if (isSuccess) {
            formLandingPageAdd.resetFields();
            setFileList([]);
            setImageFile(null)
            formLandingPageAdd.setFieldsValue(landingPageData)
        }
    }, [landingPageData, formLandingPageAdd, isSuccess])
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
            await formLandingPageAdd.validateFields();
            console.log(values);

            const formData = new FormData();
            formData.append("image", imageFile);
            formData.append("title_ar", values?.title_ar);
            formData.append("title_en", values?.title_en);
            formData.append("subtitle_ar", values?.subtitle_ar);
            formData.append("subtitle_en", values?.subtitle_en);
            formData.append("brochure", values?.brochure);
            formData.append("link", values?.link);
            formData.append("content", JSON.stringify(values?.content))
            await addUpdateLandingPage(formData)

        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <div className="mt-12 px-12 admin-management">
            <TitlePageAdmin title={"Landing Page"} />
            <div className="flex flex-col gap-y-6 mt-3">
                <Spin spinning={isLoading || isLoadingData}>
                    {landingPageData &&
                        <Form layout="vertical" form={formLandingPageAdd}
                            name="add-home-banner"
                            onFinish={onFinish}
                            className="form-add-student-assessment"
                            initialValues={landingPageData}
                        >
                            <div className="grid grid-cols-2 gap-x-6">
                                <div>
                                    <div className="flex  gap-x-6">
                                        <Form.Item label="Title English" name="title_en"
                                            rules={RulesName({ name: `TThe Field`, countChar: 50 })}
                                            className="w-1/2"
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Title Arabic" name="title_ar"
                                            rules={RulesName({ name: `The Field`, countChar: 50 })}
                                            className="w-1/2"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </div>
                                    <div className="flex gap-x-6">


                                        <Form.Item label="Sub Title English" name="subtitle_en"
                                            rules={RulesName({ name: `The Field`, countChar: 50 })}
                                            className="w-1/2"
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Sub Title Arabic" name="subtitle_ar"
                                            rules={RulesName({ name: `The Field`, countChar: 50 })}
                                            className="w-1/2"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-x-12 mb-6">
                                    <Form.Item>
                                        <Upload listType="picture" maxCount={1}
                                            accept="image/*"  {...propsImage} >
                                            <Button className="bg-[#f7a833] text-white">{`${t("Upload New Image")}`}</Button>
                                        </Upload>
                                    </Form.Item>
                                    <img
                                        src={landingPageData?.image}
                                        className="w-[300px]  h-[200px] md:rounded-3xl rounded-lg border bg-[#ccc]" />
                                </div>
                                <Form.Item label="Brochure Button Url" name="brochure"


                                >
                                    <Input.TextArea />
                                </Form.Item>
                                <Form.Item label="Link Button Url" name="link"


                                >
                                    <Input.TextArea />
                                </Form.Item>

                            </div>
                            <div>
                                <Form.List name="content" >
                                    {(fields, { add, remove }) => (
                                        <>
                                            {fields.map(({ key, name, ...restField }) => (
                                                <div className="flex items-center  gap-x-3 mb-6" key={key}>
                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, 'content_en']}
                                                        rules={[{ required: true, message: `${t("The Field")}` },
                                                        { max: 1024, message: `${t("Content English")} ${t("must be less than 1024 characters.")}` }

                                                        ]}
                                                        className="w-[47%] mb-0"
                                                    >
                                                        <Input.TextArea placeholder={`${t("Content English")}`} autoSize />
                                                    </Form.Item>
                                                    <Form.Item
                                                        {...restField}
                                                        name={[name, 'content_ar']}
                                                        rules={[{ required: true, message: `${t("The Field")}` },
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



                            <Button key="submit" htmlType="submit"
                                className="
bg-soby-gray-blue-gray
 px-12 py-6 flex items-center text-white float-right text-lg">
                                {`${t("Save & Send")}`}
                            </Button>

                        </Form>
                    }

                </Spin>
            </div>

        </div>
    )
}

export default LandingPageMng