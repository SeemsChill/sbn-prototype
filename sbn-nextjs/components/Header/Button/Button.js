//  Import built-in.
import React from "react";

//  Import styles.
import header from "../Header.module.scss";

const Button = ({ children, link, mode }) => {

    const button_mode = mode === "light" ? header["header__button__light"] : header["header__button__dark"]

    return (
        <a href={`/${link}`} className={button_mode}>
            {children}
        </a>
    );
};

export default Button;