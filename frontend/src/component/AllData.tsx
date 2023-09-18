import instaIcon from "../assets/social-icon-dark/social insta.svg";
import tiktokIcon from "../assets/social-icon-dark/social tiktok.svg";
import telegramIcon from "../assets/social-icon-dark/social telegram.svg";
import whatsupIcon from "../assets/social-icon-dark/social whatsup.svg";
import linkendIcon from "../assets/social-icon-dark/social linkend.svg";
import facebookIcon from "../assets/social-icon-dark/social facebook.svg";
import twitterIcon from "../assets/social-icon-dark/social twitter.svg";
import youtubeIcon from "../assets/social-icon-dark/social youtube.svg";

import instaIconYellow from "../assets/svg/social icons-01.svg";
import tiktokIconYellow from "../assets/svg/social icons-02.svg";
import telegramIconYellow from "../assets/svg/social icons-03.svg";
import whatsupIconYellow from "../assets/svg/social icons-04.svg";
import linkendIconYellow from "../assets/svg/social icons-05.svg";
import facebookIconYellow from "../assets/svg/social icons-06.svg";
import twitterIconYellow from "../assets/svg/social icons-07.svg";
import youtubeIconYellow from "../assets/svg/social icons-08.svg";
import slideImage from "../assets/img/soby-slider-white.png";
import SliderContain from "./slider/SliderContain";
import { ReactNode } from "react";
export const socialMenuIcon = [
    {
        key: "key_youtube",
        icon: youtubeIcon,
        url: "https://www.youtube.com/@asksoby",
    },
    {
        key: "key_insta",
        icon: instaIcon,
        url: "https://www.instagram.com/asksoby/",
    },
    {
        key: "key_tiktok",
        icon: tiktokIcon,
        url: "https://www.tiktok.com/@asksoby",
    },
    {
        key: "key_telegram",
        icon: telegramIcon,
        url: "https://t.me/asksoby",
    },
    {
        key: "key_whatsup",
        icon: whatsupIcon,
        url: "https://wa.me/+971556766748",
    },
    {
        key: "key_linkend",
        icon: linkendIcon,
        url: "www.linkedin.com/in/asksoby ",
    },
    {
        key: "key_facebook",
        icon: facebookIcon,
        url: "https://www.facebook.com/asksoby",
    },
    {
        key: "key_twitter",
        icon: twitterIcon,
        url: "https://twitter.com/asksoby",
    },

];
export const socialMenuIconYellow = [
    {
        key: "key_youtube",
        icon: youtubeIconYellow,
        url: "https://www.youtube.com/@asksoby",
    },
    {
        key: "key_insta",
        icon: instaIconYellow,
        url: "https://www.instagram.com/asksoby/",
    },
    {
        key: "key_tiktok",
        icon: tiktokIconYellow,
        url: "https://www.tiktok.com/@asksoby",
    },
    {
        key: "key_telegram",
        icon: telegramIconYellow,
        url: "https://t.me/asksoby",
    },
    {
        key: "key_whatsup",
        icon: whatsupIconYellow,
        url: "https://wa.me/+971556766748",
    },
    {
        key: "key_linkend",
        icon: linkendIconYellow,
        url: "www.linkedin.com/in/asksoby ",
    },
    {
        key: "key_facebook",
        icon: facebookIconYellow,
        url: "https://www.facebook.com/asksoby",
    },
    {
        key: "key_twitter",
        icon: twitterIconYellow,
        url: "https://twitter.com/asksoby",
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
        key: "slide_2",
        imgSrc: slideImage,
        sliderContent: <SliderContain />
    },

]