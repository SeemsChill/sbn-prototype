//Import the built-in.
import React from "react";

//  Import styles.
import styles from "./Notify.module.scss";

const Notify = ({ notifyRef, message }) => {
    
    const script = message["success"] ? message["success"] : message["error"];
    const status = message["success"] ? styles["notify__container__success"] : styles["notify__container__error"]

    return (
        <div style={{ position: "relative" }}>
            <div className={styles["notify"]} ref={notifyRef}>
                <div className={styles["notify__container"] + " " + status}>
                    <p>{script}</p>
                </div>
            </div>
        </div>
    );
};

export default Notify;