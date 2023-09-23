import {

    Button,
    Form,
    Input, Spin,  message
} from "antd";
import { t } from "i18next";

import { RulesName } from "../../../utils/RulesValidation";
import { useEffect } from "react";
import TitlePageAdmin from "../../../component/TitlePageAdmin";
import { useAddUpdateSufferBrandingMutation, useGetSufferBrandingQuery } from "../../../redux/api/brandingPageApi/sufferBrandingApi";




const SufferMng = () => {
    const { sufferData, isLoadingData } = useGetSufferBrandingQuery<{ sufferData: any, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            sufferData: data?.suffer,
            isLoadingData: isLoading
        }),
    });
    const [addUpdateSuffer, { isSuccess, isLoading }] = useAddUpdateSufferBrandingMutation();
    const [formSufferAdd] = Form.useForm();

    useEffect(() => {
        if (isSuccess) {
            formSufferAdd.resetFields();
            formSufferAdd.setFieldsValue(sufferData)
        }
    }, [sufferData, formSufferAdd, isSuccess])
    useEffect(() => {
        if (isSuccess) {
            message.success("operation success")
        }
    }, [isSuccess])


    const onFinish = async (values: any) => {
        try {
            await formSufferAdd.validateFields();
          

            const formData = new FormData();

            formData.append("text_one_en", values?.text_one_en);
            formData.append("text_two_en", values?.text_two_en);
            formData.append("text_three_en", values?.text_three_en);
            formData.append("text_four_en", values?.text_four_en);
            formData.append("text_five_en", values?.text_five_en);
            formData.append("text_six_en", values?.text_six_en);
            formData.append("text_one_ar", values?.text_one_ar);
            formData.append("text_two_ar", values?.text_two_ar);
            formData.append("text_three_ar", values?.text_three_ar);
            formData.append("text_four_ar", values?.text_four_ar);
            formData.append("text_five_ar", values?.text_five_ar);
            formData.append("text_six_ar", values?.text_six_ar);

            await addUpdateSuffer(formData)

        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    
    return (
        <div className="mt-12 px-12 admin-management">
            <TitlePageAdmin title={"Branding Suffer"} />
            <div className="flex flex-col gap-y-6 mt-3">
                <Spin spinning={isLoading || isLoadingData}>
{sufferData&&
                    <Form layout="vertical" form={formSufferAdd}
                        name="add-home-banner"
                        onFinish={onFinish}
                        className="form-add-student-assessment"
                        initialValues={sufferData}
                    >
                        <div className="grid grid-cols-2 gap-x-12">
                            <Form.Item label="Text One English" name="text_one_en"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                          
                            >
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item label="Text One Arabic" name="text_one_ar"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                           
                            >
                                <Input.TextArea />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 gap-x-12">
                            <Form.Item label="Text Two English" name="text_two_en"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                            
                            >
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item label="Text Two Arabic" name="text_two_ar"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                        
                            >
                                <Input.TextArea />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 gap-x-12">
                            <Form.Item label="Text Three English" name="text_three_en"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                          
                            >
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item label="Text Three Arabic" name="text_three_ar"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                            
                            >
                                <Input.TextArea />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 gap-x-12">
                            <Form.Item label="Text Four English" name="text_four_en"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                           
                            >
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item label="Text Four Arabic" name="text_four_ar"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                             
                            >
                                <Input.TextArea />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 gap-x-12">
                            <Form.Item label="Text Five English" name="text_five_en"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                             
                            >
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item label="Text Five Arabic" name="text_five_ar"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                           
                            >
                                <Input.TextArea />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 gap-x-12">
                            <Form.Item label="Text Six English" name="text_six_en"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                              
                            >
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item label="Text Six Arabic" name="text_six_ar"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                              
                            >
                                <Input.TextArea />
                            </Form.Item>
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

        </div>
    )
}

export default SufferMng