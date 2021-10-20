//  Import built-in.
import React from "react";

//  Import styles.
import section from "../Section.module.scss";

const Container = ({ children }) => {

    return(
        <div className={"container container-pall flex flex-jc-c flex-ai-c" + " " + section["section__container__modified"]}>
            <div className={section['section__container']}>
                {children}
            </div>
        </div>
    )
};

export default Container;