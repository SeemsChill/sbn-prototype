//  Import built-in.
import React from "react";

//  Import styles.
import styles from "@/signin_styles/Section.module.scss";


const Container = ({ children }) => {

    return(
        <div className={`container--pall flex flex-jc-c ${styles["content"]}`}>
            {children}
        </div>
    );
};

export default Container;