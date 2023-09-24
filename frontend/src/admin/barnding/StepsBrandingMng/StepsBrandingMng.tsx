import {

    Button,
    Form,
    Input, Spin,  message
} from "antd";
import { t } from "i18next";

import { RulesName } from "../../../utils/RulesValidation";
import { useEffect } from "react";
import TitlePageAdmin from "../../../component/TitlePageAdmin";
import { useAddUpdateStepMutation, useGetAllStepsQuery } from "../../../redux/api/brandingPageApi/stepsBrandingApi";




const StepsBrandingMng = () => {
    const { stepsData, isLoadingData } = useGetAllStepsQuery<{ stepsData: any, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            stepsData: data?.steps,
            isLoadingData: isLoading
        }),
    });
    const [addUpdateStep, { isSuccess, isLoading }] = useAddUpdateStepMutation();
    const [formStepsAdd] = Form.useForm();

    useEffect(() => {
        if (isSuccess) {
            formStepsAdd.resetFields();
            formStepsAdd.setFieldsValue(stepsData)
        }
    }, [stepsData, formStepsAdd, isSuccess])
    useEffect(() => {
        if (isSuccess) {
            message.success("operation success")
        }
    }, [isSuccess])


    const onFinish = async (values: any) => {
        try {
            await formStepsAdd.validateFields();
          

            const formData = new FormData();

            formData.append("text_one_en", values?.text_one_en);
            formData.append("text_two_en", values?.text_two_en);
            formData.append("text_three_en", values?.text_three_en);
         
            formData.append("text_one_ar", values?.text_one_ar);
            formData.append("text_two_ar", values?.text_two_ar);
            formData.append("text_three_ar", values?.text_three_ar);
          

            await addUpdateStep(formData)

        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    
    return (
        <div className="mt-12 px-12 admin-management">
            <TitlePageAdmin title={"Branding Steps"} />
            <div className="flex flex-col gap-y-6 mt-3">
                <Spin spinning={isLoading || isLoadingData}>

                    <Form layout="vertical" form={formStepsAdd}
                        name="add-home-banner"
                        onFinish={onFinish}
                        className="form-add-student-assessment"
                        initialValues={stepsData}
                    >
                        <div className="grid grid-cols-2 gap-x-12">
                            <Form.Item label="Step One English" name="text_one_en"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                          
                            >
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item label="Step One Arabic" name="text_one_ar"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                           
                            >
                                <Input.TextArea />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 gap-x-12">
                            <Form.Item label="Step Two English" name="text_two_en"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                            
                            >
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item label="Step Two Arabic" name="text_two_ar"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                        
                            >
                                <Input.TextArea />
                            </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 gap-x-12">
                            <Form.Item label="Step Three English" name="text_three_en"
                                rules={RulesName({ name: `The Field`, countChar: 1500 })}
                          
                            >
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item label="Step Three Arabic" name="text_three_ar"
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

                    </Form>
                </Spin>
            </div>

        </div>
    )
}

export default StepsBrandingMng