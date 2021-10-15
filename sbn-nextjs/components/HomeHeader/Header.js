//  Import built-in.
import React, { useState } from "react";

//  Import header components.
import Navbar from "./Navbar/Navbar";
import Button from "./Button/Button";
import Toggle from "./Toggle/Toggle";

//  Import styles.
import header from "./Header.module.scss";

//  Import svg.
import Logo from "../../svg/PrimaryLogo/Logo";


const Head = ({ theme, setTheme }) => {

    return (
        <header className={header["header"]}>
            <Navbar mode={theme}>
                <Toggle theme={theme} setTheme={setTheme} />

                <a href="/">
                    <Logo mode={theme} />
                </a>

                <div className={header["header__button"] + " " + "flex flex-ai-c"}>
                    <Button link={"SignIn"} mode={theme}>Sign in</Button>
                </div>
            </Navbar>
        </header>
    );
};

export default Head;