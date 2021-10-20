//  Import the built-in.
import React, { useEffect, useState } from "react";

//  Import Cookies.
import Cookies from "js-cookie";

//  Core hook funtion.
export default function saigonAuthProvider() {
    
    //  hook states.
    const [darkMode, setDarkMode] = useState(false);  // theme state.

    //  changeMode context.
    const changeMode = () => {
        if(!darkMode) {
            Cookies.set("darkMode", true, { secure: true, sameSite: 'None' });
            return setDarkMode(true);
        } else {
            Cookies.remove("darkMode", { secure: true, sameSite: 'None' });
            return setDarkMode(false);
        }
    };

    useEffect(() => {
        if(Cookies.get("darkMode")) {
            setDarkMode(true);
        }
    }, []);

    return {
        //  Mode.
        darkMode,
        changeMode,
    };
};