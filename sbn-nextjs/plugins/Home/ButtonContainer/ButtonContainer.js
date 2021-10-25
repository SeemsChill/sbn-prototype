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
            {
                !bundle ?
                    (
                        <>
                            <Button link={"SignIn"}>Sign in</Button>
                            <Button link={"SignUp"}>Sign up</Button>
                        </> 
                    ) : (
                        <Button link={"SignOut"}>Sign out</Button>
                    )
            }
        </div>
    );
};

export default ButtonContainer;