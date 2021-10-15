//  Import built-in.
import React from "react";

//  Impport styles.
// import styles from "./Header.module.scss";

const Navbar = ({ children }) => {
    return(
        <nav className={"container container-pall flex flex-jc-c flex-ai-c"}>
            {children}
        </nav>
    );
}

export default Navbar;