//  Import built-in.
import React from "react";

//  Import other components.
import Button from "@/plugHome/Button/Button";

//  Import styles.
import styles from "@/home_styles/Header.module.scss";


//  Button Container Component.
const ButtonContainer = ({ bundle }) => {
    return (
        <div className={`flex flex-ai-c hide-for-mobile ${styles["button"]}`}>
            <Button>Home</Button>
        </div>
    );
};

export default ButtonContainer;