import {

  Button,
  Form,
  Input, Spin, message
} from "antd";
import { t } from "i18next";

import { useEffect } from "react";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import TitlePageAdmin from "../../../component/TitlePageAdmin";
import "video-react/dist/video-react.css";

import { useAddUpdateExperienceTextMutation, useGetAllExperiencesTextsQuery } from "../../../redux/api/aboutPageApi/experiencesAboutApi";
import ExperiencesAboutImagesMng from "./ExperincesAboutImagesMng";



const ExperienceAboutMng = () => {
  const { experiencesTextData, isLoadingData } = useGetAllExperiencesTextsQuery<{ experiencesTextData: any, isLoadingData: boolean }>(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      isLoadingData: isLoading,
      experiencesTextData: data?.experience
    }),
  });
  const [addUpdateExperienceText, { isSuccess, isLoading }] = useAddUpdateExperienceTextMutation();

  const [formExperienceTextAdd] = Form.useForm();

  useEffect(() => {
    if (isSuccess) {
      formExperienceTextAdd.resetFields();

      formExperienceTextAdd.setFieldsValue(experiencesTextData)
    }
  }, [experiencesTextData, formExperienceTextAdd, isSuccess])
  useEffect(() => {
    if (isSuccess) {
      message.success("operation success")
    }
  }, [isSuccess])


  const onFinish = async (values: any) => {
    try {
      await formExperienceTextAdd.validateFields();
      const formData = new FormData();
      formData.append("content_one", JSON.stringify(values?.content_one))
      formData.append("content_two", JSON.stringify(values?.content_two))


      await addUpdateExperienceText(formData)


    } catch (e) {
      console.log("onEditRow ", e);
    }
  }
  return (
    <div className="mt-12 px-12 admin-management">

      <div className="flex flex-col gap-y-6 mt-3">
        <Spin spinning={isLoading || isLoadingData}>
          {experiencesTextData &&
            <div className="grid grid-row-2 gap-y-6">
              <Form layout="vertical" form={formExperienceTextAdd}
                name="add-experience-about"
                onFinish={onFinish}
                className="form-add-student-assessment"
                initialValues={experiencesTextData}
              >

                {/* Text */}
                <div className="flex flex-col gap-y-6 bg-soby-light-1 border p-3 rounded-lg">
                  <TitlePageAdmin title={"Profile Professional Path text"} />

                  <div className="flex flex-col gap-y-6">
                    <TitlePageAdmin title={"Content One"} />
                    <Form.List name="content_one" >
                      {(fields, { add, remove }) => (
                        <>
                          {fields.map(({ key, name, ...restField }) => (
                            <div className="flex items-center  gap-x-3 mb-6" key={key}>
                              <Form.Item
                                {...restField}
                                name={[name, 'content_en']}
                                rules={[{ required: true ,message: `${t("The Field is Required")}`},
                                { max: 1024, message: `${t("Content English")} ${t("must be less than 1024 characters.")}` }

                                ]}
                                className="w-[47%] mb-0"
                              >
                                <Input.TextArea placeholder={`${t("Content English")}`} autoSize />
                              </Form.Item>
                              <Form.Item
                                {...restField}
                                name={[name, 'content_ar']}
                                rules={[{ required: true ,message: `${t("The Field is Required")}`},
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
                  <div className="flex flex-col gap-y-6">
                    <TitlePageAdmin title={"Content Two"} />
                    <Form.List name="content_two" >
                      {(fields, { add, remove }) => (
                        <>
                          {fields.map(({ key, name, ...restField }) => (
                            <div className="flex items-center  gap-x-3 mb-6" key={key}>
                              <Form.Item
                                {...restField}
                                name={[name, 'content_en']}
                                rules={[{ required: true ,message: `${t("The Field is Re quired")}`  },
                                { max: 1024, message: `${t("Content English")} ${t("must be less than 1024 characters.")}` }

                                ]}
                                className="w-[47%] mb-0"
                              >
                                <Input.TextArea placeholder={`${t("Content English")}`} autoSize />
                              </Form.Item>
                              <Form.Item
                                {...restField}
                                name={[name, 'content_ar']}
                                rules={[{ required: true  ,message: `${t("The Field is Required")}` },
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

                <Button key="submit" htmlType="submit"
                  className="
                   bg-soby-gray-blue-gray
                    px-12 py-6 flex items-center text-white float-right text-lg">
                  {`${t("Save & Send")}`}
                </Button>

              </Form>
            </div>
          }

        </Spin>
      </div >
      <ExperiencesAboutImagesMng />

    </div >

  )
}

export default ExperienceAboutMng