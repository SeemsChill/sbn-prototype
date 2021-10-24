//  Import built-in.
import React from "react";

//  Import context hooks.
import { useAuth } from "@/lib/sbn-context";

//  Import other components.
import Navbar from "@/plugSignIn/Navbar/Navbar";
import Toggle from "@/plugHome/Toggle/Toggle";
import ButtonContainer from "@/plugSignIn/ButtonContainer/ButtonContainer";
import Logo from "@/PrimaryLogo/Logo";

//  Impport styles.
import styles from "@/signin_styles/Header.module.scss";

//  Import plugins.
import stylePlugins from "@/plugins/stylePlugins";


const Header = () => {
    
    //  Using the context hook.
    const { darkMode } = useAuth();

    //  check mode.
    const modeStyle = stylePlugins(darkMode, styles["header__dark"]);

    return (
        <header className={`${styles["header"]} ${modeStyle}`}>
            <Navbar>
                <Toggle />
                <Logo/>
                <ButtonContainer/>
            </Navbar>
        </header>
    );
};

export default Header;