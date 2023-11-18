
import { FooterSoby, HeaderSoby } from '.'
import { NavLink, Outlet } from 'react-router-dom'
import instaIcon from "../assets/social-icon-dark/social insta.svg";
import tiktokIcon from "../assets/social-icon-dark/social tiktok.svg";
import telegramIcon from "../assets/social-icon-dark/social telegram.svg";
import whatsupIcon from "../assets/social-icon-dark/social whatsup.svg";
import linkendIcon from "../assets/social-icon-dark/social linkend.svg";
import facebookIcon from "../assets/social-icon-dark/social facebook.svg";
import twitterIcon from "../assets/social-icon-dark/social twitter.svg";
import youtubeIcon from "../assets/social-icon-dark/social youtube.svg";
import { Tooltip } from 'antd'
import './index.css'
import { t } from 'i18next';

const WebsiteLayout = () => {
    const socialMenuIcon = [
        {
            key: "key_youtube",
            icon: youtubeIcon,
            name:`${t("Youtube")}`,
            url: "https://www.youtube.com/@asksoby",
        },
        {
            key: "key_insta",
            icon: instaIcon,
            name:t("Instagram"),
            url: "https://www.instagram.com/asksoby/",
        },
        {
            key: "key_tiktok",
            icon: tiktokIcon,
            name:t("TikTok"),
            url: "https://www.tiktok.com/@asksoby",
        },
        {
            key: "key_telegram",
            icon: telegramIcon,
            name:t("Telegram"),
            url: "https://t.me/asksoby",
        },
        {
            key: "key_whatsup",
            icon: whatsupIcon,
            name:t("Whatsapp"),
            url: "https://wa.me/+971556766748",
        },
        {
            key: "key_linkend",
            icon: linkendIcon,
            name:t("LinkedIn"),
            url: "www.linkedin.com/in/asksoby ",
        },
        {
            key: "key_facebook",
            icon: facebookIcon,
            name:t("Facebook"),
            url: "https://www.facebook.com/asksoby",
        },
        {
            key: "key_twitter",
            icon: twitterIcon,
            name:t("Twitter"),
            url: "https://twitter.com/asksoby",
        },
    
    ];
    return (
        <>

            <HeaderSoby />

            <div className=" lg:min-h-screen min-h-auto relative ">
                <div className="fixed top-[30%] ltr:left-0 rtl:right-0 bg-white p-2  z-50  flex flex-col gap-y-2 side-social">
                    {socialMenuIcon?.map((item) => (
                        <NavLink to={item?.url} key={item?.key}>
                            <Tooltip title={`${item.name}`} placement='left' >
                                <img src={item?.icon} alt={item.key} className="xl:w-9 w-6  " />
                             
                            </Tooltip>

                        </NavLink>
                    ))}
                </div>
                <Outlet />
            </div>
            <FooterSoby />
        </>
    )
}

export default WebsiteLayout