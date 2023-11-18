import {

    Button,
    Form,
    Input, Spin,
    //  Upload, UploadFile, UploadProps, 
     message
} from "antd";
import { t } from "i18next";

import { RulesName } from "../../../utils/RulesValidation";
import { useEffect,} from "react";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import TitlePageAdmin from "../../../component/TitlePageAdmin";
import { useAddUpdateAboutHomeDataMutation, useGetAboutHomeDataQuery } from "../../../redux/api/homePageApi/aboutHomeApi";
import "video-react/dist/video-react.css";



const HomeAboutMng = () => {
    const { aboutHomeData, isLoadingData } = useGetAboutHomeDataQuery<{ aboutHomeData: any, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            aboutHomeData: data?.about,
            isLoadingData: isLoading
        }),
    });
    const [addUpdateAboutHome, { isSuccess, isLoading }] = useAddUpdateAboutHomeDataMutation();
    // const [imageFile, setImageFile] = useState<any>();
    const [formHomeAboutAdd] = Form.useForm();
    // const [fileList, setFileList] = useState<UploadFile[]>([]);
    useEffect(() => {
        if (isSuccess) {
            formHomeAboutAdd.resetFields();
            // setFileList([]);
            // setImageFile(null)
            formHomeAboutAdd.setFieldsValue(aboutHomeData);
        }
    }, [aboutHomeData, formHomeAboutAdd, isSuccess])

    useEffect(() => {
        if (isSuccess) {
            message.success("operation success")
        }
    }, [isSuccess])

    // const propsImage: UploadProps = {
    //     onChange(info) {
    //         setFileList(info.fileList);
    //         setImageFile(info.file)
    //     },
    //     onRemove: file => {
    //         const index = fileList.indexOf(file);
    //         const newFileList = fileList.slice();
    //         newFileList.splice(index, 1);
    //         setFileList(newFileList);
    //     },
    //     beforeUpload: file => {
    //         setFileList([...fileList, file]);
    //         return false;
    //     },
    //     fileList,
    //     progress: {
    //         strokeColor: {
    //             '0%': '#108ee9',
    //             '100%': '#87d068',
    //         },
    //         strokeWidth: 3,
    //         format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    //     },
    // };

    const onFinish = async (values: any) => {
        try {
            await formHomeAboutAdd.validateFields();
            const formData = new FormData();
            formData.append("content", JSON.stringify(values?.content))
            formData.append("title_ar", values?.title_ar);
            formData.append("title_en", values?.title_en);
            formData.append("subtitle_ar", values?.subtitle_ar);
            formData.append("subtitle_en", values?.subtitle_en);
            formData.append("video_link", values?.video_link);

            await addUpdateAboutHome(formData)


        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <div className="mt-12 px-12 admin-management">
            <TitlePageAdmin title={"Home About"} />
            <div className="flex flex-col gap-y-6 mt-3">
                <Spin spinning={isLoading || isLoadingData}>


                    {aboutHomeData && <Form layout="vertical" form={formHomeAboutAdd}
                        name="add-home-about"
                        onFinish={onFinish}
                        className="form-add-student-assessment"
                        initialValues={aboutHomeData}
                    >
                        <div className="grid grid-cols-2 gap-x-6">
                            <div>
                                <div className="flex  gap-x-6">
                                    <Form.Item label="Title English" name="title_en"
                                        rules={RulesName({ name: `Title English`, countChar: 50 })}
                                        className="w-1/2"
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Title Arabic" name="title_ar"
                                        rules={RulesName({ name: `Title Arabic`, countChar: 50 })}
                                        className="w-1/2"
                                    >
                                        <Input dir="rtl" />
                                    </Form.Item>
                                </div>
                                <div className="flex gap-x-6">


                                    <Form.Item label="Sub Title English" name="subtitle_en"
                                        rules={RulesName({ name: `Sub Title English`, countChar: 50 })}
                                        className="w-1/2"
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Sub Title Arabic" name="subtitle_ar"
                                        rules={RulesName({ name: `Sub Title Arabic`, countChar: 50 })}
                                        className="w-1/2"
                                    >
                                        <Input dir="rtl" />
                                    </Form.Item>
                                </div>
                            </div>
                            {/* <div className="flex justify-center gap-x-12 mb-6">
                                <Form.Item>
                                    <Upload listType="picture" maxCount={1}
                                        accept="video/*"  {...propsImage} >
                                        <Button className="bg-[#f7a833] text-white">{`${t("Upload New Video")}`}</Button>
                                    </Upload>
                                </Form.Item>
                                <video controls controlsList=" timeline volume"
                                    src={aboutHomeData?.video_link}
                                    className="w-[200px]  h-[200px] md:rounded-3xl rounded-lg border bg-[#ccc]" />
                            </div> */}
                            <div className="flex flex-col justify-center items-center gap-y-12 mb-6">
                                <Form.Item label="Video Link" name="video_link"
                                    rules={RulesName({ name: `The Field`, countChar: 1500 })}
                                    className="w-full"
                                >
                                    <Input.TextArea />
                                </Form.Item>
                                <iframe className="w-[500px] sm:w-full" height="392"
                                    src={aboutHomeData?.video_link}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>

                                </iframe>
                            </div>

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
                                                    rules={[{ required: true, message: `${t("Missing Content English")}` },
                                                    { max: 1024, message: `${t("Content English")} ${t("must be less than 1024 characters.")}` }

                                                    ]}
                                                    className="w-[47%] mb-0"
                                                >
                                                    <Input.TextArea placeholder={`${t("Content English")}`} autoSize />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'content_ar']}
                                                    rules={[{ required: true, message: `${t("Missing Content Arabic")}` },
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

                    </Form>}
                </Spin>
            </div>

        </div >
    )
}

export default HomeAboutMng