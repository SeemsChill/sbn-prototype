//  Import built-in.
import React from "react";

//  Icons.
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";

//  Import styles.
import styles from "@/home_styles/Header.module.scss";

//  Import context.
import { useAuth } from "@/lib/sbn-context";

//  Import plugins.
import { togglePlugins } from "@/plugins/componentPlugins";


const Toggle = () => {
    //  Using the context hook.
    const { darkMode, changeMode } = useAuth();

    //  Check mode.
    const icon = togglePlugins(darkMode, styles["toggle__dark"]);

    return(
        <div onClick={changeMode} className={`${styles["toggle"]} hide-for-mobile`}>
            {icon}
        </div>
    );
};

export default Toggle;
