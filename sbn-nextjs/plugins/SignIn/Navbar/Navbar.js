//  Import built-in.
import React from "react";

//  Import context hook.
import { useAuth } from "@/lib/sbn-context";

//  Impport styles.
import styles from "@/signin_styles/Header.module.scss";

//  Import plugins.
import stylePlugins from "@/plugins/stylePlugins";


const Navbar = ({ children }) => {
    
    //  Extract the context.
    const { darkMode } = useAuth();

    //  Check mode.
    const modeStyle = stylePlugins(darkMode, styles["header__nav__dark"], styles["header__nav__light"]);
    
    return(
        <nav className={`container container-pall flex flex-jc-sb ${modeStyle} flex-ai-c`}>
            {children}
        </nav>
    );
}

export default Navbar;