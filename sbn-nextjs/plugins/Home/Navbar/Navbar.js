//  Import built-in.
import React from "react";

const Navbar = ({ children }) => {

    return (
        <nav className={`container container-pall flex flex-jc-sb flex-ai-c justify-for-mobile`}>
            {children}
        </nav>
    );
};

export default Navbar;