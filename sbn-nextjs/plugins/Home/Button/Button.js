//  Import built-in.
import React from "react";

//  Import context hook.
import { useAuth } from "@/lib/sbn-context";

//  Import styles.
import styles from "@/home_styles/Header.module.scss";

//  Import plugins.
import stylePlugins from "@/plugins/stylePlugins";


const Button = ({ children, link }) => {

    //  Using the context hook.
    const { darkMode } = useAuth();
    //const modeStyle = mode === "light" ? styles["button__light"] : styles["button__dark"];

    const modeStyle = stylePlugins(darkMode, styles["button__dark"], styles["button__light"]);

    return (
        <a href={`/${link ? link : ''}`} className={`${modeStyle}`}>
            {children}
        </a>
    );
};

export default Button;