import { Form, Input, Radio, Space } from "antd"
import { t } from "i18next";
import { useState } from "react";


const ConsultationForm = () => {
    const [form] = Form.useForm();
    const [dir] = useState(localStorage.getItem("lang"));
    const classLang = dir === "ar" ? "font-almarai" : "font-roboto";
    return (
        <div className="lg:mt-12 mt-6">
            <Form form={form} className={`${classLang}`}>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-6">
                    {/* column one */}
                    <div className="flex flex-col justify-between lg:gap-y-0 gap-y-6">
                        <div className="flex flex-col gap-y-1">
                            <h5 className="xl:text-xl  text-xs  text-soby-gray-dark-4 font-extrabold mb-2 word-break">
                                {`${t(
                                    "What is required"
                                )}`}
                            </h5>
                            <Form.Item name={"what-is-required"} className="bg-soby-light-1  p-3 mb-0">
                                <Radio.Group  >
                                    <Space direction="vertical">
                                        <Radio value={1}><h5 className="md:text-base  text-xs  text-soby-gray-dark-2">Training Courses</h5></Radio>
                                        <Radio value={2}><h5 className="md:text-base  text-xs  text-soby-gray-dark-2">Consultation Sessions </h5></Radio>
                                        <Radio value={3}><h5 className="md:text-base  text-xs  text-soby-gray-dark-2">Keynote Speeches</h5></Radio>
                                        <Radio value={4}><h5 className="md:text-base  text-xs  text-soby-gray-dark-2">Coaching Sessions</h5></Radio>
                                        <Radio value={5}><h5 className="md:text-base  text-xs  text-soby-gray-dark-2">Other (Please specify in message)</h5></Radio>
                                    </Space>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <h5 className="xl:text-xl  text-xs  text-soby-gray-dark-4 font-extrabold mb-2 word-break">
                                {`${t(
                                    "Connect with"
                                )}`}
                            </h5>
                            <Form.Item name={"connect-with"} className="bg-soby-light-1  p-3 mb-0">
                                <Radio.Group  >
                                    <Space direction="vertical">
                                        <Radio value={1}><h5 className="md:text-base  text-xs  text-soby-gray-dark-2">Person</h5></Radio>
                                        <Radio value={2}><h5 className="md:text-base  text-xs  text-soby-gray-dark-2">Company</h5></Radio>

                                    </Space>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <h5 className="xl:text-xl  text-xs  text-soby-gray-dark-4 font-extrabold mb-2 word-break">
                            {`${t(
                                "Your information"
                            )}`}
                        </h5>
                        <div className="flex flex-col">
                            <Form.Item name={"name"} >
                                <Input placeholder="Name" className="py-2 bg-white rounded-none border-none shadow-sm" />
                            </Form.Item>
                            <Form.Item name={"email"} >
                                <Input placeholder="Email" className="py-2 bg-white rounded-none border-none shadow-sm" />
                            </Form.Item>
                            <Form.Item name={"mobile"} >
                                <Input placeholder="Mobile" className="py-2 bg-white rounded-none border-none shadow-sm" />
                            </Form.Item>
                            <Form.Item name={"message"} className="mb-0" >
                                <Input.TextArea placeholder="Message" className="py-2 bg-white rounded-none border-none shadow-sm" rows={5} />
                            </Form.Item>
                        </div>

                    </div>
                    <div className="flex flex-col justify-between lg:gap-y-0 gap-y-6">
                        <div className="flex flex-col gap-y-1">
                            <h5 className="xl:text-xl  text-xs  text-soby-gray-dark-4 font-extrabold mb-2 word-break">
                                {`${t(
                                    "What is required"
                                )}`}
                            </h5>
                            <Form.Item name={"urgency-level"} className="bg-soby-light-1 p-3 mb-0">
                                <Radio.Group  >
                                    <Space direction="vertical">
                                        <Radio value={1}><h5 className="md:text-base  text-xs  text-soby-gray-dark-2">Very Urgent (Response Within 24 Hours)</h5></Radio>
                                        <Radio value={2}><h5 className="md:text-base  text-xs  text-soby-gray-dark-2">Urgent (Response Within 48 Hours)</h5></Radio>
                                        <Radio value={3}><h5 className="md:text-base  text-xs  text-soby-gray-dark-2">Normal (Response Within Nest Week)</h5></Radio>

                                    </Space>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div className="flex flex-col gap-y-3 ">
                            <h3 className="text-soby-gray-blue-gray lg:text-xl text-lg tefont-semibold">Schedule a free 30-minute Zoom meeting</h3>
                            <button className="w-full text-white rounded-md bg-soby-gray-blue-gray py-3">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default ConsultationForm