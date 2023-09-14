
import { t } from "i18next";
import { NavLink, useLocation } from "react-router-dom";
import ItemDropdown from "./dropdown/ItemDropdown";
import { FormOutlined, BookOutlined } from '@ant-design/icons';
interface IMainMenu {
    key: string;
    name: string | JSX.Element;
    url: string;

}
const MainMenu: React.FC<{ classesText: string }> = ({ classesText }) => {

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
            name: <ItemDropdown itemsData={[
                { id: '1', name: "Train 1", icon: <FormOutlined /> },
                { id: '2', name: "Train 2", icon: <FormOutlined /> },
                { id: '3', name: "Train 3", icon: <FormOutlined /> },
                { id: '4', name: "Train 4", icon: <FormOutlined /> },
            ]} name={`${t("Training")}`} baseUrl="/training" />,
            url: "",
        },
        {
            key: "key_publications",
            name: <ItemDropdown itemsData={[
                { id: '1', name: "Book 1", icon: <BookOutlined /> },
                { id: '2', name: "Book 2", icon: <BookOutlined /> },
                { id: '3', name: "Book 3", icon: <BookOutlined /> },
                { id: '4', name: "Book 4", icon: <BookOutlined /> },
            ]} name={`${t("Publications")}`} baseUrl="/publications" />,
            url: "",
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
                className={` ${classesText} ${pathname === item?.url
                    ? "text-soby-yellow-light"
                    : "text-soby-gray-blue-gray"
                    } text-soby-gray-blue-gray hover:text-soby-yellow-light  `}
            >
                {item?.name}
            </NavLink>
        ))}
    </>


};

export default MainMenu;
