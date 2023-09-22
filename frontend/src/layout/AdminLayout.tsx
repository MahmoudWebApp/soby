
import React, { useEffect, useState } from 'react';
import {
    PieChartOutlined,
    HomeOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Layout, Menu } from 'antd';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import logo from "../assets/favicon-soby.jpg"
import { TfiLayoutSlider } from "react-icons/tfi"
import { BiInfoSquare, BiBuilding } from "react-icons/bi"
import { IoPeopleOutline } from "react-icons/io5"
import { PiExamLight, PiFlagBannerLight, PiStepsLight } from "react-icons/pi"
import { LiaNetworkWiredSolid, LiaBookSolid } from "react-icons/lia"
import { LuBadgeInfo } from 'react-icons/lu'
import { TiMessageTyping } from 'react-icons/ti'
import {
    TbBrandStorybook, TbBrandAbstract,
    TbBrandBooking, TbBrandCarbon, TbBrandElectronicArts, TbBrandElastic, TbBrandBlogger, TbHelicopterLanding, Tb360
} from 'react-icons/tb'
import { FaChalkboardTeacher, FaQuestion } from 'react-icons/fa'
import { MdOutlinePlayLesson, MdOutlinePlaylistPlay } from 'react-icons/md'
import { BsJournalBookmarkFill } from 'react-icons/bs'




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
        getItem('Home', '/admin/home', <HomeOutlined />, [
            getItem('Slider Hero', '/admin/home/slider-hero', <TfiLayoutSlider />),
            getItem('About', '/admin/home/about', <BiInfoSquare />),
            getItem('Testimonials', '/admin/home/testimonials', <IoPeopleOutline />),
            getItem('Banner', '/admin/home/banner', <PiFlagBannerLight />),
            getItem('Companies', '/admin/home/companies', <BiBuilding />),
            getItem('Networks', '/admin/home/networks', <LiaNetworkWiredSolid />),

        ]
        ),
        getItem('About', '/admin/about', <LuBadgeInfo />, [
            getItem('Vision& Mission', '/admin/about/vision-mission', <TiMessageTyping />),
            getItem('Profile Pdf', '/admin/about/profile-pdf', <HomeOutlined />),
            getItem('Story', '/admin/about/story', <TbBrandStorybook />),
            getItem('Brand', '/admin/about/brand', <TbBrandAbstract />),
            getItem('Clifton', '/admin/about/clifton', <TbBrandCarbon />),
            getItem('Education', '/admin/about/education', <TbBrandElectronicArts />),
            getItem('Experience', '/admin/about/experience', <TbBrandElastic />),
            getItem('Books', '/admin/about/books', <LiaBookSolid />),

        ]
        ),
        getItem('Branding', '/admin/branding', <TbBrandBooking />, [
            getItem('LandingPage', '/admin/branding/landing-page', <TbHelicopterLanding />),
            getItem('Suffer', '/admin/branding/Suffer', <Tb360 />),
            getItem('Steps', '/admin/branding/steps', <PiStepsLight />),
            getItem('Trainers', '/admin/branding/trainers', <FaChalkboardTeacher />),
            getItem('FAQ', '/admin/branding/faq', <FaQuestion />),
            getItem('Lessons', '/admin/branding/lessons', <MdOutlinePlayLesson />),
        ]
        ),
        getItem('Training', 'admin/training', <PiExamLight />,
        ),
        getItem('Blog', 'admin/blog', <TbBrandBlogger />,
        ),
        getItem('Courses', 'admin/courses', <BsJournalBookmarkFill />,
        ),
        getItem('Networks PlayList', 'admin/networks-playList', <MdOutlinePlaylistPlay />,
        ),


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

                        <Avatar size={100} src={logo} shape="circle" />
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
                        <Avatar size={25} src={logo} shape="circle" />
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