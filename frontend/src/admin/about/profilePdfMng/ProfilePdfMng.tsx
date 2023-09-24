import {

  Button,
  Form,
  Input,
  Spin, Upload, UploadFile, UploadProps, message
} from "antd";
import { t } from "i18next";

import { useEffect, useState } from "react";
import TitlePageAdmin from "../../../component/TitlePageAdmin";
import { useAddUpdateProfilePdfMutation, useGetProfilePdfQuery } from "../../../redux/api/aboutPageApi/profilePdfApi";
import { validateFileType } from "../../../utils/RulesValidation";




const ProfilePdfMng = () => {
  const { profilePdfData, isLoadingData } = useGetProfilePdfQuery<{ profilePdfData: any, isLoadingData: boolean }>(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      profilePdfData: data?.profile,
      isLoadingData: isLoading
    }),
  });
  const [addUpdateProfilePdf, { isSuccess, isLoading }] = useAddUpdateProfilePdfMutation();
  const [pdfAr, setPdfAr] = useState<any>();
  const [pdfEn, setPdfEn] = useState<any>();
  const [formProfilePdfAdd] = Form.useForm();
  const [fileListPdfAr, setFileListPdfAr] = useState<UploadFile[]>([]);
  const [fileListPdfEn, setFileListPdfEn] = useState<UploadFile[]>([]);
  useEffect(() => {
    if (isSuccess) {
      formProfilePdfAdd.resetFields();
      setFileListPdfAr([]);
      setFileListPdfEn([]);
      setPdfAr(null)
      setPdfEn(null)
      formProfilePdfAdd.setFieldsValue(profilePdfData)
    }
  }, [formProfilePdfAdd, isSuccess, profilePdfData])
  useEffect(() => {
    if (isSuccess) {
      message.success("operation success")
    }
  }, [isSuccess])
  const propsFilePdfAr: UploadProps = {
    beforeUpload: file => {

      const isAllowedType =
        validateFileType(file, "application/pdf")
      if (!isAllowedType) {
        setFileListPdfAr([]);
        message.error(`${file.name} is not file Pdf file`);
        return false;
      }
      setFileListPdfAr([file]);
      setPdfAr(file)
      return false;
    },
    onRemove: file => {
      const index = fileListPdfAr.indexOf(file);
      const newFileList = fileListPdfAr.slice();
      newFileList.splice(index, 1);
      setFileListPdfAr(newFileList);
    },

    fileList: fileListPdfAr,
  };
  const propsFilePdfEn: UploadProps = {
    beforeUpload: file => {
      const isAllowedType =
        validateFileType(file, "application/pdf")
      if (!isAllowedType) {
        setFileListPdfEn([]);
        message.error(`${file.name} is not file Pdf file`);
        return false;
      }
      setFileListPdfEn([file]);
      setPdfEn(file)
      return false;
    },
    onRemove: file => {
      const index = fileListPdfEn.indexOf(file);
      const newFileList = fileListPdfEn.slice();
      newFileList.splice(index, 1);
      setFileListPdfEn(newFileList);
    },

    fileList: fileListPdfEn,
  };

  const onFinish = async () => {
    try {
      await formProfilePdfAdd.validateFields();
      const formData = new FormData();
      formData.append("profile_ar", pdfAr);
      formData.append("profile_en", pdfEn);
      await addUpdateProfilePdf(formData)

    } catch (e) {
      console.log("onEditRow ", e);
    }
  }
  return (
    <div className="mt-12 px-12 admin-management">
      <TitlePageAdmin title={"About Profile"} />
      <div className="flex flex-col gap-y-6 mt-3">
        <Spin spinning={isLoading || isLoadingData}>

          {profilePdfData &&
            <Form layout="vertical" form={formProfilePdfAdd}
              name="add-about-brand"
              onFinish={onFinish}
              className="form-add-student-assessment"
              initialValues={profilePdfData}
            >
              <div className="grid grid-cols-2 gap-x-6">

                <div >
                  <Form.Item name='profile_en'
                    label={<><h3 className="text-lg font-semibold text-soby-gray-blue-gray">Profile English Pdf</h3></>}
                  >
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item >
                    <Upload listType="picture" maxCount={1}
                      accept=".pdf"  {...propsFilePdfEn} >
                      <Button className="bg-[#f7a833] text-white">{`${t("Upload New Profile English")}`}</Button>
                    </Upload>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name='profile_ar'
                    label={<><h3 className="text-lg font-semibold text-soby-gray-blue-gray">Profile Arabic Pdf</h3></>}
                  >
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item >
                    <Upload listType="picture" maxCount={1}
                      accept=".pdf"  {...propsFilePdfAr} >
                      <Button className="bg-[#f7a833] text-white">{`${t("Upload New Profile Arabic")}`}</Button>
                    </Upload>
                  </Form.Item>
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

export default ProfilePdfMng