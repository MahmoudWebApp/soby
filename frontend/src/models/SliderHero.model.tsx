export interface ISliderHeroProps {
    key?: string;
    id?: number | string;
    title_ar: string;
    title_en: string;
    subTitle_ar: string;
    subTitle_en: string;
    content?: [
        {
            content_ar: string;
            content_en: string;
        }
    ],
    content_ar: string;
    content_en: string;
    image: any;
    profile_link?: string;
    videos_link?: string;
    brochure?: string;
    link?: string
}