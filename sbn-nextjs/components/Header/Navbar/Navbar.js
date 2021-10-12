//  Import built-in.
import React from "react";

//  Import styles.
import header from "../Header.module.scss";

const Navbar = ({ children, mode }) => {
    
    const nav_mode = mode === "light" ? header["header__nav__light"] : header["header__nav__dark"];

    return (
        <nav className={"container container-pall flex flex-jc-sb flex-ai-c" + " " + nav_mode}>
            {children}
        </nav>
    );
};

export default Navbar;