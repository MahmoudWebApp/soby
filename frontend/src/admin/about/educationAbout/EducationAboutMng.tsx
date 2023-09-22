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
import { useAddUpdateEducationAboutMutation, useGetEducationAboutQuery } from "../../../redux/api/aboutPageApi/educationAboutApi";
import { IEducationProps } from "../../../models/EducationAbout.model";



const EducationAboutMng = () => {
  const { educationData, isLoadingData } = useGetEducationAboutQuery<{ educationData: IEducationProps, isLoadingData: boolean }>(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      isLoadingData: isLoading,
      educationData: data?.education
    }),
  });
  const [addUpdateMissionVision, { isSuccess, isLoading }] = useAddUpdateEducationAboutMutation();

  const [formEducationAboutAdd] = Form.useForm();

  useEffect(() => {
    if (isSuccess) {
      formEducationAboutAdd.resetFields();

      formEducationAboutAdd.setFieldsValue(educationData)
    }
  }, [educationData, formEducationAboutAdd, isSuccess])
  useEffect(() => {
    if (isSuccess) {
        message.success("operation success")
    }
}, [isSuccess])

  const onFinish = async (values: any) => {
    try {
      await formEducationAboutAdd.validateFields();
      const formData = new FormData();
      formData.append("content_one", JSON.stringify(values?.content_one))
      formData.append("content_two", JSON.stringify(values?.content_two))
      formData.append("title_en", values?.title_en);
      formData.append("title_ar", values?.title_ar);
      formData.append("subtitle_ar", values?.subtitle_ar);
      formData.append("subtitle_en", values?.subtitle_en);


      await addUpdateMissionVision(formData)


    } catch (e) {
      console.log("onEditRow ", e);
    }
  }
  return (
    <div className="mt-12 px-12 admin-management">
      <TitlePageAdmin title={"About Education"} />
      <div className="flex flex-col gap-y-6 mt-3">
        <Spin spinning={isLoading ||isLoadingData}>

          {educationData &&
            <Form layout="vertical" form={formEducationAboutAdd}
              name="add-home-about"
              onFinish={onFinish}
              className="form-add-student-assessment"
              initialValues={educationData}
            >
              <div className="grid grid-row-3 gap-y-6">
                <div>
                  <div className="flex  gap-x-6">
                    <Form.Item label="Title English" name="title_en"
                      rules={RulesName({ name: `TThe Filed`, countChar: 50 })}
                      className="w-1/2"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item label="Title Arabic" name="title_ar"
                      rules={RulesName({ name: `The Filed`, countChar: 50 })}
                      className="w-1/2"
                    >
                      <Input dir="rtl" />
                    </Form.Item>
                  </div>
                  <div className="flex gap-x-6">


                    <Form.Item label="Sub Title English" name="subtitle_en"
                      rules={RulesName({ name: `The Filed`, countChar: 50 })}
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
                <div>
                  <Form.List name="content_one" >
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
                            {`${t("Add Content to The First Section ")}`}
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>

                </div>


                <div >
                  <Form.List name="content_two" >
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
                            {`${t("Add Content to The Second Section")}`}
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>

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
        </Spin >
      </div >

    </div >
  )
}

export default EducationAboutMng