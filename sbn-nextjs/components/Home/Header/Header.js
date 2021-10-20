//  Import built-in.
import React from "react";

//  Import context hooks.
import { useAuth } from "@/lib/sbn-context";

//  Import header components.
import Navbar from "@/plugHome/Navbar/Navbar";
import Toggle from "@/plugHome/Toggle/Toggle";
import ButtonContainer from "@/plugHome/ButtonContainer/ButtonContainer";
import Logo from "@/PrimaryLogo/Logo";

//  Import styles.
import styles from "@/home_styles/Header.module.scss";

//  Import plugins.
import stylePlugins from "@/plugins/stylePlugins";


const Header = () => {
    //  Extract the context hook.
    const { darkMode } = useAuth();

    //  Apply mode style.
    const modeStyle = stylePlugins(darkMode, styles["header__dark"]);

    return (
        <header className={`${styles["header"]} ${modeStyle}`}>
            <Navbar>
                <Toggle />
                <Logo />
                <ButtonContainer />
            </Navbar>
        </header>
    );
};

export default Header;