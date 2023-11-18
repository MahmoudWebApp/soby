import {

    Button,
    Form,
    Input, Spin, message,
} from "antd";
import { t } from "i18next";

import { RulesName } from "../../../utils/RulesValidation";
import { useEffect } from "react";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import TitlePageAdmin from "../../../component/TitlePageAdmin";
import "video-react/dist/video-react.css";
import { useAddUpdateStoryAboutMutation, useGetStoryAboutQuery } from "../../../redux/api/aboutPageApi/storyAboutApi";
import { IStoryProps } from "../../../models/Story.model";



const StoryAboutMng = () => {
    const { storyAboutData, isLoadingData } = useGetStoryAboutQuery<{ storyAboutData: IStoryProps, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            isLoadingData: isLoading,
            storyAboutData: data?.story
        }),
    });
    const [addUpdateStoryAbout, { isSuccess, isLoading }] = useAddUpdateStoryAboutMutation();
    const [formStoryAboutAdd] = Form.useForm();

    useEffect(() => {
        if (isSuccess) {
            formStoryAboutAdd.resetFields();

            formStoryAboutAdd.setFieldsValue(storyAboutData)
        }
    }, [storyAboutData, formStoryAboutAdd, isSuccess])
    useEffect(() => {
        if (isSuccess) {
            message.success("operation success")
        }
    }, [isSuccess])

    const onFinish = async (values: any) => {
        try {
            await formStoryAboutAdd.validateFields();
            const formData = new FormData();
            formData.append("content", JSON.stringify(values?.content))
            formData.append("title_ar", values?.title_ar);
            formData.append("title_en", values?.title_en);
            formData.append("subtitle_ar", values?.subtitle_ar);
            formData.append("subtitle_en", values?.subtitle_en);
            formData.append("video_link", values?.video_link);

            await addUpdateStoryAbout(formData)


        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <div className="mt-12 px-12 admin-management">
            <TitlePageAdmin title={"Profile Story"} />
            <div className="flex flex-col gap-y-6 mt-3">
                <Spin spinning={isLoading || isLoadingData}>


                    {storyAboutData &&
                        < Form layout="vertical" form={formStoryAboutAdd}
                            name="add-home-about"
                            onFinish={onFinish}
                            className="form-add-student-assessment"
                            initialValues={storyAboutData}
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
                                            <Input dir="rtl" />
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
                                            <Input dir="rtl" />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center gap-y-12 mb-6">
                                    <Form.Item label="Video Link" name="video_link"
                                        rules={RulesName({ name: `The Field`, countChar: 1500 })}
                                        className="w-full"
                                    >
                                        <Input.TextArea />
                                    </Form.Item>
                                    {
                                        storyAboutData?.video_link?.includes("https") &&
                                        <iframe className="w-[500px] sm:w-full" height="392"
                                            src={storyAboutData?.video_link}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; 
                     encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen>

                                        </iframe>
                                    }

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

        </div >
    )
}

export default StoryAboutMng