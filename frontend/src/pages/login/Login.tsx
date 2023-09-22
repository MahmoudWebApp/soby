import { Form, Input, Spin } from "antd"
import { t } from "i18next"
import { NavLink, useNavigate } from "react-router-dom"
import logo from "../../assets/svg/soby logo.svg";
import { useLoginUserMutation } from "../../redux/api/usersApi/usersApi";
import { useEffect } from "react";

const Login = () => {
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const [loginUser, { data, isSuccess, isLoading }] = useLoginUserMutation()
    useEffect(() => {
        if (isSuccess) {
            if (data?.user?.token) {
                navigate('/admin')
            }
            localStorage.setItem("token", data?.user?.token);
        }
    }, [isSuccess])
    return (
        <div className="
        lg:py-[80px] md:py-[60px] py-[40px] lg:px-28 px-6  md:mt-[96px] mt-[70px">


            <div className="flex  flex-col  justify-center items-center sm:p-10 p-3">
                <Spin spinning={isLoading} size="large">
                    <div className=" flex flex-col items-center  gap-y-12 justify-center bg-white shadow-md px-12 py-12 rounded-md">
                        <div className="flex ">
                            <NavLink to="/">
                                <img src={logo} alt="logo" className="w-72" />
                            </NavLink>
                        </div>
                        <h2 className=" text-3xl font-bold  text-soby-gray-blue-gray">{`${t("Sign in")}`}</h2>

                        <div className="w-full mt-3 flex justify-center">
                            <Form
                                size="large"
                                form={form}
                                layout="vertical"
                                onFinish={(values) => {
                                    loginUser({ ...values })
                                    console.log(values);

                                }}


                            >
                                <Form.Item name="email"  >
                                    <Input
                                        placeholder="Email"
                                    />
                                </Form.Item>
                                <Form.Item name="password"  >
                                    <Input.Password
                                        placeholder="Password"
                                    />
                                </Form.Item>
                                <div className="flex justify-center">
                                    <button className="bg-soby-yellow-light py-2 px-10 rounded  text-white " type="submit">
                                        <span className="text-word-white xl:text-base text-xs">{`${t("Login")}`}</span>
                                    </button>
                                </div>

                            </Form>


                        </div>
                    </div>
                </Spin>
            </div>
        </div>

    )
}

export default Login

