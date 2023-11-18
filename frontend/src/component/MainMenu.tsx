
import { t } from "i18next";
import { NavLink, useLocation } from "react-router-dom";
import ItemDropdown from "./dropdown/ItemDropdown";
import { FormOutlined, BookOutlined } from '@ant-design/icons';
import { useGetAllTrainingsQuery } from "../redux/api/trainingPageApi/trainingApi";
import { IBooksAboutProps } from "../models/BookAbout.model";
import { useGetAllBooksQuery } from "../redux/api/aboutPageApi/booksAboutApi";
interface IMainMenu {
    key: string;
    name: string | JSX.Element;
    url: string;

}
const MainMenu: React.FC<{ classesText: string }> = ({ classesText }) => {
    const lang = localStorage.getItem("lang")
    const { trainings } = useGetAllTrainingsQuery<{ trainings: any[] }>(undefined, {
        selectFromResult: ({ data }) => ({
            trainings: data?.data,

        }),
    });
    const { books } = useGetAllBooksQuery<{ books: IBooksAboutProps[] }>(undefined, {
        selectFromResult: ({ data }) => ({
            books: data?.books,

        }),
    });


    const itemsDataTrainings = trainings && trainings?.map(t => {
        return {
            ...t, url: t?.link, name: lang === "en" ? t?.title_en : t?.title_ar,
            icon: <FormOutlined />
        }
    })
    const itemsDataBooks = books && books?.map(b => {
        return {
            ...b,
            url: `/publications?id=${b?.id}`,
            name: lang === "en" ? b?.title_en : b?.title_ar,
            icon: <BookOutlined />
        }
    })
    const location = useLocation();
    const { pathname } = location;
    const mainMenu: IMainMenu[] = [
        {
            key: "key_about_header",
            name: `${t("Profile")}`,
            url: "/about",
        },
        {
            key: "key_branding_header",
            name: `${t("Persona")}`,
            url: "/branding",
        },
        {
            key: "key_training_header",
            name: <ItemDropdown itemsData={itemsDataTrainings ?? []} name={`${t("Masterclass")}`} />,
            url: "",
        },
        {
            key: "key_publications_header",
            name: <ItemDropdown itemsData={itemsDataBooks ?? []} name={`${t("Publications")}`} />,
            url: "",
        },
        {
            key: "key_blog_header",
            name: `${t("Musings")}`,
            url: "/blog",
        },
        {
            key: "key_courses_header",
            name: `${t("Freebies")}`,
            url: "/courses",
        },
        {
            key: "key_networks_header",
            name: `${t("Networks")}`,
            url: "/networks",
        },
    ];

    return <>
        {mainMenu?.map((item) => (
            <NavLink
                to={item?.url}
                key={item?.key}
                className={` ${classesText} ${pathname === item?.url
                    ? "text-soby-yellow-light"
                    : "text-soby-gray-blue-gray"
                    } text-soby-gray-blue-gray hover:text-soby-yellow-light font-bold text-2xl `}
            >
                {item?.name}
            </NavLink>
        ))}
    </>


};

export default MainMenu;
