import instaIcon from "../assets/social-icon-dark/social insta.svg";
import tiktokIcon from "../assets/social-icon-dark/social tiktok.svg";
import telegramIcon from "../assets/social-icon-dark/social telegram.svg";
import whatsupIcon from "../assets/social-icon-dark/social whatsup.svg";
import linkendIcon from "../assets/social-icon-dark/social linkend.svg";
import facebookIcon from "../assets/social-icon-dark/social facebook.svg";
import twitterIcon from "../assets/social-icon-dark/social twitter.svg";
import youtubeIcon from "../assets/social-icon-dark/social youtube.svg";
import { t } from "i18next";
import slideImage from "../assets/img/soby-slider-white.png";
import SliderContain from "./slider/SliderContain";
import { ReactNode } from "react";
export const socialMenuIcon = [
    {
        key: "key_youtube",
        icon: youtubeIcon,
        url: "/",
    },
    {
        key: "key_insta",
        icon: instaIcon,
        url: "/",
    },
    {
        key: "key_tiktok",
        icon: tiktokIcon,
        url: "/",
    },
    {
        key: "key_telegram",
        icon: telegramIcon,
        url: "/",
    },
    {
        key: "key_whatsup",
        icon: whatsupIcon,
        url: "/",
    },
    {
        key: "key_linkend",
        icon: linkendIcon,
        url: "/",
    },
    {
        key: "key_facebook",
        icon: facebookIcon,
        url: "/",
    },
    {
        key: "key_twitter",
        icon: twitterIcon,
        url: "/",
    },

];

interface IMainSliderData {
    key: string;
    imgSrc: string;
    sliderContent: ReactNode
}
export const mainSliderData: IMainSliderData[] = [
    {
        key: "slide_1",
        imgSrc: slideImage,
        sliderContent: <SliderContain />
    }, {
        key: "slide_1",
        imgSrc: slideImage,
        sliderContent: <SliderContain />
    },

]