//  Import built-in.
import React from "react";

//  Import other components.
import Navbar from "./Navbar/Navbar";

//  Impport styles.
import styles from "./Header.module.scss";

//  Import svg.
import Logo from "../../../svg/SecondaryLogo/Logo";

const Header = () => {
    return(
        <header className={styles["header"]}>
            <Navbar>
                <a href="/">
                    <Logo/>
                </a>
            </Navbar>
        </header>
    );
};

export default Header;