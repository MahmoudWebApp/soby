
import { t } from "i18next";
import { NavLink, useLocation } from "react-router-dom";
interface IMainMenu {
    key: string;
    name: string;
    url: string
}
const MainMenu: React.FC<unknown> = () => {
    const location = useLocation();
    const { pathname } = location;
    const mainMenu: IMainMenu[] = [
        {
            key: "key_about",
            name: `${t("About")}`,
            url: "/about",
        },
        {
            key: "key_branding",
            name: `${t("Branding")}`,
            url: "/branding",
        },
        {
            key: "key_training",
            name: `${t("Training")}`,
            url: "/training",
        },
        {
            key: "key_publications",
            name: `${t("Publications")}`,
            url: "/publications",
        },
        {
            key: "key_blog",
            name: `${t("Blog")}`,
            url: "/blog",
        },
        {
            key: "key_courses",
            name: `${t("Courses")}`,
            url: "/courses",
        },
        {
            key: "key_networks",
            name: `${t("Networks")}`,
            url: "/networks",
        },
    ];

    return <>
        {mainMenu?.map((item) => (
            <NavLink
                to={item?.url}
                key={item?.key}
                className={`"xl:text-base/[19px] md:text-sm text-lg ${pathname === item?.url
                    ? "text-soby-yellow-light"
                    : "text-soby-gray-dark-4"
                    } text-soby-gray-dark-4 hover:text-soby-yellow-light  `}
            >
                {item?.name}
            </NavLink>
        ))}
    </>


};

export default MainMenu;
