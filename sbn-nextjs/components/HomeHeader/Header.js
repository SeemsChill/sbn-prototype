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


const Head = ({ bundle, theme, setTheme }) => {

    const head_mode = theme === "light" ? header["header__light"] : header["header__dark"];

    return (
        <header className={header["header"] + " " + head_mode}>
            <Navbar mode={theme}>
                <Toggle theme={theme} setTheme={setTheme}/>
                <a href="/">
                    <Logo mode={theme} />
                </a>
                <div className={header["header__button"] + " " + "flex flex-ai-c" + " " + "hide-for-mobile"}>
                    {bundle ? (
                        <Button link={"SignIn"} mode={theme}>Sign in</Button>
                    ) : (
                        <>
                             <Button link={"SignOut"} mode={theme}>Sign out</Button>
                        </>
                    )}
                </div>
            </Navbar>
        </header>
    );
};

export default Head;