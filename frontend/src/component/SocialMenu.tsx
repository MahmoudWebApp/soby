import { NavLink } from "react-router-dom";
import { socialMenuIcon, socialMenuIconYellow } from "./AllData";

const SocialMenu: React.FC<{ colorIcon: string }> = ({colorIcon }) => {
    return <>
        {colorIcon === "blue" ? (
            socialMenuIcon?.map((item) => (
                <NavLink to={item?.url} key={item?.key} className="w-1/4">
                    <img src={item?.icon} alt={item.key} className="xl:w-9 md:w-6 w-12 " />
                </NavLink>
            ))
        ) : (socialMenuIconYellow?.map((item) => (
            <NavLink to={item?.url} key={item?.key} className="w-1/4">
                <img src={item?.icon} alt={item.key} className="xl:w-9 md:w-6 w-12 " />
            </NavLink>
        )))}

    </>

};

export default SocialMenu;
