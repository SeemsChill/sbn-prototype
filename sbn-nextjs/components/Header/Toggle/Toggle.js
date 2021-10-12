//  Import built-in.
import React from "react";

//  Icons.
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";

//  Import styles.
import header from "../Header.module.scss";

const Toggle = ({ theme, setTheme }) => {
    //  Change theme handle.
    function changeTheme() {
        if(theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
    
    //  Check the icon.
    const icon = theme === "light" ? <BsSun size={30} /> : <BsFillMoonStarsFill size={30} className={header["toggle__dark"]}/>;

    return(
        <div onClick={changeTheme} className={header["header__toggle"]}>
            {icon}
        </div>
    );
};

export default Toggle;
