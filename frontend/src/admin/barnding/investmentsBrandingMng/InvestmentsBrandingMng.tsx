import {

    Button,
    Divider,
    Form,
    Input, InputNumber, Spin, message
} from "antd";
import { t } from "i18next";

import { RulesName } from "../../../utils/RulesValidation";
import { useEffect } from "react";
import TitlePageAdmin from "../../../component/TitlePageAdmin";
import { useAddUpdateInvestmentMutation, useGetAllInvestmentsQuery } from "../../../redux/api/brandingPageApi/investmentBrandApi";





const InvestmentsBrandingMng = () => {
    const { investmentsData, isLoadingData } = useGetAllInvestmentsQuery<{ investmentsData: any, isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            investmentsData: data?.data,
            isLoadingData: isLoading
        }),
    });
    const [addUpdateInvestment, { isSuccess, isLoading }] = useAddUpdateInvestmentMutation();
    const [formInvestmentsAdd] = Form.useForm();

    useEffect(() => {
        if (isSuccess) {
            formInvestmentsAdd.resetFields();
            formInvestmentsAdd.setFieldsValue(investmentsData)
        }
    }, [investmentsData, formInvestmentsAdd, isSuccess])
    useEffect(() => {
        if (isSuccess) {
            message.success("operation success")
        }
    }, [isSuccess])


    const onFinish = async (values: any) => {
        try {
            await formInvestmentsAdd.validateFields();

            const formData = new FormData();
            // One
            formData.append("title_one_en", values?.title_one_en);
            formData.append("title_one_ar", values?.title_one_ar);
            formData.append("description_one_en", values?.description_one_en);
            formData.append("description_one_ar", values?.description_one_ar);
            formData.append("price_one", (values?.price_one)?.toString());
            formData.append("link_one", values?.link_one);
            // Two
            formData.append("title_two_en", values?.title_two_en);
            formData.append("title_two_ar", values?.title_two_ar);
            formData.append("description_two_en", values?.description_two_en);
            formData.append("description_two_ar", values?.description_two_ar);
            formData.append("price_two", (values?.price_two)?.toString());
            formData.append("link_two", values?.link_two);
            // Three
            formData.append("title_three_en", values?.title_three_en);
            formData.append("title_three_ar", values?.title_three_ar);
            formData.append("description_three_en", values?.description_three_en);
            formData.append("description_three_ar", values?.description_three_ar);
            formData.append("price_three", (values?.price_three)?.toString());
            formData.append("link_three", values?.link_three);



            await addUpdateInvestment(formData)

        } catch (e) {
            console.log("onEditRow ", e);
        }
    }

    return (
        <div className="mt-12 px-12 admin-management">
            <TitlePageAdmin title={"Investments"} />
            <div className="flex flex-col gap-y-6 mt-3">
                <Spin spinning={isLoading || isLoadingData}>
                    {investmentsData &&
                        <Form layout="vertical" form={formInvestmentsAdd}
                            name="add-investment-personal"
                            onFinish={onFinish}
                            className="form-add-student-assessment"
                            initialValues={investmentsData}
                        >
                            <div className="grid grid-row-3 gap-y-12 w-full">
                                {/* Content One */}
                                <div className="flex flex-start">
                                    <TitlePageAdmin title={"Investment One"} />
                                </div>

                                <div className="flex gap-x-6 w-full">
                                    <div className="flex flex-col gap-y-3 w-full">
                                        <Form.Item label="Title English" name="title_one_en"
                                            rules={RulesName({ name: `The Field`, countChar: 128 })}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Title Arabic" name="title_one_ar"
                                            rules={RulesName({ name: `The Field`, countChar: 128 })}

                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Price" name="price_one"

                                        >
                                            <InputNumber />
                                        </Form.Item>

                                    </div>
                                    <div className="flex flex-col gap-y-3 w-full">
                                        <Form.Item label="Description English" name="description_one_en"
                                            rules={RulesName({ name: `The Field`, countChar: 128 })}

                                        >
                                            <Input.TextArea />
                                        </Form.Item>
                                        <Form.Item label="Description Arabic" name="description_one_ar"
                                            rules={RulesName({ name: `The Field`, countChar: 128 })}

                                        >
                                            <Input.TextArea />
                                        </Form.Item>
                                        <Form.Item label="Link Button Url" name="link_one"


                                        >
                                            <Input.TextArea />
                                        </Form.Item>


                                    </div>
                                </div>
                                <Divider style={{border:"2px solid #c1c1c1"}}/>
                                {/* Content Two */}
                                <div className="flex flex-start">
                                    <TitlePageAdmin title={"Investment Two"} />
                                </div>

                                <div className="flex gap-x-6 w-full">
                                    <div className="flex flex-col gap-y-3 w-full">
                                        <Form.Item label="Title English" name="title_two_en"
                                            rules={RulesName({ name: `The Field`, countChar: 128 })}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Title Arabic" name="title_two_ar"
                                            rules={RulesName({ name: `The Field`, countChar: 128 })}

                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Price" name="price_two"
                                        >
                                            <InputNumber />
                                        </Form.Item>

                                    </div>
                                    <div className="flex flex-col gap-y-3 w-full">
                                        <Form.Item label="Description English" name="description_two_en"
                                            rules={RulesName({ name: `The Field`, countChar: 128 })}

                                        >
                                            <Input.TextArea />
                                        </Form.Item>
                                        <Form.Item label="Description Arabic" name="description_two_ar"
                                            rules={RulesName({ name: `The Field`, countChar: 128 })}

                                        >
                                            <Input.TextArea />
                                        </Form.Item>
                                        <Form.Item label="Link Button Url" name="link_two"


                                        >
                                            <Input.TextArea />
                                        </Form.Item>


                                    </div>
                                </div>
                                <Divider style={{border:"2px solid #c1c1c1"}}/>
                                {/* Content Three */}
                                <div className="flex flex-start">
                                    <TitlePageAdmin title={"Investment Three"} />
                                </div>

                                <div className="flex gap-x-6 w-full">
                                    <div className="flex flex-col gap-y-3 w-full">
                                        <Form.Item label="Title English" name="title_three_en"
                                            rules={RulesName({ name: `The Field`, countChar: 128 })}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Title Arabic" name="title_three_ar"
                                            rules={RulesName({ name: `The Field`, countChar: 128 })}

                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Price" name="price_three"
                                        >
                                            <InputNumber />
                                        </Form.Item>

                                    </div>
                                    <div className="flex flex-col gap-y-3 w-full">
                                        <Form.Item label="Description English" name="description_three_en"
                                            rules={RulesName({ name: `The Field`, countChar: 128 })}

                                        >
                                            <Input.TextArea />
                                        </Form.Item>
                                        <Form.Item label="Description Arabic" name="description_three_ar"
                                            rules={RulesName({ name: `The Field`, countChar: 128 })}

                                        >
                                            <Input.TextArea />
                                        </Form.Item>
                                        <Form.Item label="Link Button Url" name="link_three"


                                        >
                                            <Input.TextArea />
                                        </Form.Item>


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

        </div>
    )
}

export default InvestmentsBrandingMng