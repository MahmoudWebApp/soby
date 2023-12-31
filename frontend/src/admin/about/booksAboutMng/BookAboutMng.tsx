import {

    Button,
    Form,
    Input, Space, Spin, Upload, UploadFile, UploadProps, message
} from "antd";
import { t } from "i18next";

import AddEditModal from "../../../component/addEditModal/AddEditModal";
import { RulesName, validateFileType } from "../../../utils/RulesValidation";
import { useEffect, useState } from "react";
import TitlePageAdmin from "../../../component/TitlePageAdmin";
import BookAboutTable from "./BookAboutTable";
import { useAddBookMutation, useGetAllBooksQuery } from "../../../redux/api/aboutPageApi/booksAboutApi";
import { IBooksAboutProps } from "../../../models/BookAbout.model";




const BooksAboutMng = () => {
    const { books, isLoadingData } = useGetAllBooksQuery<{ books: IBooksAboutProps[], isLoadingData: boolean }>(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            books: data?.books,
            isLoadingData: isLoading
        }),
    });
    const [addBook, { isSuccess, isLoading }] = useAddBookMutation();
    const [imageFile, setImageFile] = useState<any>();
    const [formBookAboutAdd] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false)
    useEffect(() => {
        if (isSuccess) {
            formBookAboutAdd.resetFields()
            setFileList([]);
            setImageFile('')
            setIsModalVisible(false)
        }
    }, [formBookAboutAdd, isSuccess])
    useEffect(() => {
        if (isSuccess) {
            message.success("operation success")
        }
    }, [isSuccess])

    const propsImage: UploadProps = {
        onRemove: file => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: file => {
            const isAllowedType =
                validateFileType(file, "image/png") ||
                validateFileType(file, "image/svg+xml");
            if (!isAllowedType) {
                setFileList((state) => [...state]);
                message.error(`${file.name} is not Icon file`);
                return false;
            }
            setFileList([file]);
            setImageFile(file)
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
            await formBookAboutAdd.validateFields();

            const formData = new FormData();
            formData.append("image", imageFile);
            formData.append("title_ar", values?.title_ar);
            formData.append("title_en", values?.title_en);
            formData.append("content_ar", values?.content_ar);
            formData.append("content_en", values?.content_en);
            formData.append("video_link", values?.video_link);
            formData.append("link", values?.link);
            await addBook(formData)

        } catch (e) {
            console.log("onEditRow ", e);
        }
    }
    return (
        <>

            <div className="mt-12 px-12 admin-management">
                <TitlePageAdmin title={"Profile Books"} />
                <Spin spinning={isLoading || isLoadingData}>


                    <div className="flex flex-col gap-y-6">
                        <AddEditModal
                            btnText={<button
                                className="bg-soby-yellow-light px-6 py-2 text-white rounded-md text-base w-fit"
                                onClick={() => setIsModalVisible(true)}>
                                Add Book
                            </button>}
                            title={"Add Book"}
                            width={"800px"}
                            isModalVisible={isModalVisible}
                            setIsModalVisible={setIsModalVisible}

                        >
                            <Form layout="vertical" form={formBookAboutAdd}
                                name="add-book"
                                onFinish={onFinish}
                                className="form-add-student-assessment"
                            >
                                <div className="grid grid-row-2 gap-y-6">
                                    <div className="grid grid-cols-2 gap-x-6">
                                        <div className="flex flex-col ">
                                            <Form.Item label="Title English" name="title_en"
                                                rules={RulesName({ name: `The Field`, countChar: 50 })}

                                            >
                                                <Input />
                                            </Form.Item>
                                            <Form.Item label="Title Arabic" name="title_ar"
                                                rules={RulesName({ name: `The Field`, countChar: 50 })}

                                            >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item>
                                                <Upload listType="picture" maxCount={1}
                                                    accept="image/*"  {...propsImage} >
                                                    <Button className="bg-[#f7a833] text-white">{`${t("Upload Icon")}`}</Button>
                                                </Upload>
                                            </Form.Item>

                                        </div>
                                        <div className="flex flex-col">
                                            <Form.Item label="Button Url" name="link"
                                                rules={RulesName({ name: `The Field`, countChar: 1024 })}

                                            >
                                                <Input.TextArea />
                                            </Form.Item>
                                            <Form.Item label="Description English" name="content_en"
                                                rules={RulesName({ name: `The Field`, countChar: 1500 })}

                                            >
                                                <Input.TextArea />
                                            </Form.Item>
                                            <Form.Item label="Description Arabic" name="content_ar"
                                                rules={RulesName({ name: `The Field`, countChar: 1500 })}

                                            >
                                                <Input.TextArea />
                                            </Form.Item>

                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-12 mb-6">
                                        <Form.Item label="Video Link" name="video_link"
                                      
                                            className="w-full"
                                        >
                                            <Input.TextArea />
                                        </Form.Item>
                                   

                                    </div>
                                </div>


                                <Space className="flex  justify-around">
                                    <Button key="back" onClick={() => {
                                        formBookAboutAdd.resetFields()
                                        setFileList([]);
                                        setImageFile('')
                                        setIsModalVisible(false)
                                    }} className="bg-soby-yellow-light text-white">
                                        {`${t("Cancel")}`}
                                    </Button>,
                                    <Button key="submit" htmlType="submit" className="bg-soby-gray-blue-gray text-white"
                                        loading={isLoading}
                                    >
                                        {`${t("Save & Send")}`}
                                    </Button>
                                </Space>
                            </Form>
                        </AddEditModal >
                        <BookAboutTable booksData={books?.map(b => {
                            return {
                                ...b, key: `${b?.id}-key`
                            }
                        })} />
                    </div>
                </Spin>
            </div>

        </>
    )
}

export default BooksAboutMng