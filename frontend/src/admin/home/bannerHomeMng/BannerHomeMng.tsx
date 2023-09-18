import {
    Alert,
    Button,
    Form,
    Input, Space, Upload, UploadFile, UploadProps
} from "antd";
import { t } from "i18next";

import { RulesName } from "../../../utils/RulesValidation";
import { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import TitlePageAdmin from "../../../component/TitlePageAdmin";




const BannerHomeMng = () => {
    const [imageFile, setImageFile] = useState<any>();
    const [formBannerHomeAdd] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);

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
            await formBannerHomeAdd.validateFields();
            console.log(values);

            // const formData = new FormData();
            // formData.append("avatar", imageFile);


        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <div className="mt-12 px-12 admin-management">
            <TitlePageAdmin title={"Home Banner"}/>
            <div className="flex flex-col gap-y-6 mt-3">

                <Form layout="vertical" form={formBannerHomeAdd}
                    name="add-home-banner"
                    onFinish={onFinish}
                    className="form-add-student-assessment"
                >
                    <div className="grid grid-cols-2 gap-x-6">
                        <div>
                            <div className="flex  gap-x-6">
                                <Form.Item label="Title English" name="title_ar"
                                    rules={RulesName({ name: `TThe Field`, countChar: 50 })}
                                    className="w-1/2"
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Title Arabic" name="title_en"
                                    rules={RulesName({ name: `The Field`, countChar: 50 })}
                                    className="w-1/2"
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="flex gap-x-6">


                                <Form.Item label="Sub Title English" name="subtitle_ar"
                                    rules={RulesName({ name: `The Field`, countChar: 50 })}
                                    className="w-1/2"
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Sub Title Arabic" name="subtitle_en"
                                    rules={RulesName({ name: `The Field`, countChar: 50 })}
                                    className="w-1/2"
                                >
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>
                        <div>
                            <Form.Item>
                                <Upload listType="picture" maxCount={1}
                                    accept="video/*"  {...propsImage} >
                                    <Button className="bg-[#f7a833] text-white">{`${t("Upload New Video")}`}</Button>
                                </Upload>
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
                                                rules={[{ required: true, message: `${t("MThe Field")}` },
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

            </div>

        </div>
    )
}

export default BannerHomeMng