
import React, { useEffect, useState } from 'react';
import {
    PieChartOutlined,
    AppstoreOutlined,
    FireOutlined,
    ReadOutlined,
    UserOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Layout, Menu } from 'antd';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import logo from "../assets/favicon-soby.jpg"




const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}


const AdminLayout: React.FC = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
  
    const items: MenuItem[] = [
        getItem('DashBoard', '/admin', <PieChartOutlined />),

    ];

    const onClick: MenuProps["onClick"] = (e) => {
        navigate(e.key);
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });
    useEffect(() => {
        if (windowWidth < 500) {
            setCollapsed(true)
        } else {
            setCollapsed(false)
        }
    }, [windowWidth]);
    
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className='flex flex-col py-12 justify-between gap-y-12'>
                    <div className="flex items-center justify-center  ">
                      
                        <Avatar size={100} src={logo} shape="circle"  />
                    </div>
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['1']} mode="inline" items={items}
                        onClick={onClick}

                    />
                    <div className={` mx-auto items-center ${collapsed ? " hidden " : " flex "}`}>
                        <button className="bg-soby-yellow-dark py-2 px-10 rounded btn-animated"
                            onClick={() => {
                                localStorage.removeItem("token");
                                
                                navigate('/')
                            }}>
                            <span className="text-white text-base">Logout</span>
                        </button>
                    </div>

                    <NavLink to="/" className="flex  justify-center gap-x-2 mt-10">
                        <img src={logo} alt="logo" className="w-6  bg-white" />
                        <h6 className={`text-sm text-white d ${collapsed ? " hidden " : " block "}`}>
                            back to website
                        </h6>
                    </NavLink>


                </div>

            </Sider>
            <Layout>
                <Content style={{ margin: '0 16px' }}>

                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Soby ©2023 </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout