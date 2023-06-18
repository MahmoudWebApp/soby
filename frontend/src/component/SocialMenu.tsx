import { NavLink } from "react-router-dom";
import { socialMenuIcon } from "./AllData";

const SocialMenu:React.FC<unknown> = () => {
    return <>
        {socialMenuIcon?.map((item) => (
            <NavLink to={item?.url} key={item?.key} className="w-1/4">
                <img src={item?.icon} alt={item.key} className="xl:w-9 md:w-6 w-12 animate-[wiggle_1s_ease-in-out_infinite]" />
            </NavLink>
        ))}
    </>

};

export default SocialMenu;