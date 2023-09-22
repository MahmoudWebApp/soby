import {

    Button,
    Form,
    Input, Spin, message
} from "antd";
import { t } from "i18next";

import { RulesName } from "../../../utils/RulesValidation";
import { useEffect } from "react";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import TitlePageAdmin from "../../../component/TitlePageAdmin";
import "video-react/dist/video-react.css";
import { useAddUpdateMissionVisionDataMutation, useGetMissionVisionDataQuery } from "../../../redux/api/aboutPageApi/missionVisionApi";
import { IMissionVisionProps } from "../../../models/MissionVision.model";



const MissionVisionMng = () => {
    const { missionVisionData, isLoadingData } = useGetMissionVisionDataQuery<{ missionVisionData: IMissionVisionProps, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            isLoadingData: isLoading,
            missionVisionData: data?.result
        }),
    });
    const [addUpdateMissionVision, { isSuccess, isLoading }] = useAddUpdateMissionVisionDataMutation();

    const [formMissionVisionAdd] = Form.useForm();

    useEffect(() => {
        if (isSuccess) {
            formMissionVisionAdd.resetFields();

            formMissionVisionAdd.setFieldsValue(missionVisionData)
        }
    }, [missionVisionData, formMissionVisionAdd, isSuccess])
    useEffect(() => {
        if (isSuccess) {
            message.success("operation success")
        }
    }, [isSuccess])


    const onFinish = async (values: any) => {
        try {
            await formMissionVisionAdd.validateFields();
            const formData = new FormData();
            formData.append("mission_content", JSON.stringify(values?.mission_content))
            formData.append("vision_content", JSON.stringify(values?.vision_content))
            formData.append("vision_title_en", values?.vision_title_en);
            formData.append("vision_title_ar", values?.vision_title_ar);
            formData.append("mission_title_en", values?.mission_title_en);
            formData.append("mission_title_ar", values?.mission_title_ar);
            formData.append("mission_subtitle_ar", values?.mission_subtitle_ar);
            formData.append("mission_subtitle_en", values?.mission_subtitle_en);
            formData.append("vision_subtitle_ar", values?.vision_subtitle_ar);
            formData.append("vision_subtitle_en", values?.vision_subtitle_en);


            await addUpdateMissionVision(formData)


        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <div className="mt-12 px-12 admin-management">

            <div className="flex flex-col gap-y-6 mt-3">
                <Spin spinning={isLoading || isLoadingData}>


                    {missionVisionData &&
                        <Form layout="vertical" form={formMissionVisionAdd}
                            name="add-home-about"
                            onFinish={onFinish}
                            className="form-add-student-assessment"
                            initialValues={missionVisionData}
                        >
                            <div className="grid grid-row-2 gap-y-6">
                                {/* Mission */}
                                <div className="flex flex-col bg-soby-light-1 border p-3 rounded-lg">
                                    <TitlePageAdmin title={"About Mission"} />
                                    <div className="grid grid-row-2 gap-y-6">
                                        <div>
                                            <div className="flex  gap-x-6">
                                                <Form.Item label="Title English" name="mission_title_en"
                                                    rules={RulesName({ name: `TThe Filed`, countChar: 50 })}
                                                    className="w-1/2"
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="Title Arabic" name="mission_title_ar"
                                                    rules={RulesName({ name: `The Filed`, countChar: 50 })}
                                                    className="w-1/2"
                                                >
                                                    <Input dir="rtl" />
                                                </Form.Item>
                                            </div>
                                            <div className="flex gap-x-6">


                                                <Form.Item label="Sub Title English" name="mission_subtitle_en"
                                                    rules={RulesName({ name: `The Filed`, countChar: 50 })}
                                                    className="w-1/2"
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="Sub Title Arabic" name="mission_subtitle_ar"
                                                    rules={RulesName({ name: `Sub Title Arabic`, countChar: 50 })}
                                                    className="w-1/2"
                                                >
                                                    <Input dir="rtl" />
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div>
                                            <Form.List name="mission_content" >
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
                                    </div>
                                </div>


                                {/* Vision */}
                                <div className="flex flex-col bg-soby-light-1 border p-3 rounded-lg">
                                    <TitlePageAdmin title={"About Vision "} />
                                    <div className="grid grid-row-2 gap-y-6">
                                        <div>
                                            <div className="flex  gap-x-6">
                                                <Form.Item label="Title English" name="vision_title_en"
                                                    rules={RulesName({ name: `TThe Filed`, countChar: 50 })}
                                                    className="w-1/2"
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="Title Arabic" name="vision_title_ar"
                                                    rules={RulesName({ name: `The Filed`, countChar: 50 })}
                                                    className="w-1/2"
                                                >
                                                    <Input dir="rtl" />
                                                </Form.Item>
                                            </div>
                                            <div className="flex gap-x-6">


                                                <Form.Item label="Sub Title English" name="vision_subtitle_en"
                                                    rules={RulesName({ name: `The Filed`, countChar: 50 })}
                                                    className="w-1/2"
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="Sub Title Arabic" name="vision_subtitle_ar"
                                                    rules={RulesName({ name: `The filed`, countChar: 50 })}
                                                    className="w-1/2"
                                                >
                                                    <Input dir="rtl" />
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div >
                                            <Form.List name="vision_content" >
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

export default MissionVisionMng