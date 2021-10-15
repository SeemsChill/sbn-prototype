//  Import built-in.
import React from "react";

import section from "../../Section.module.scss";

const SignIn = ({ formRef }) => {
    return(
        <div style={{ position: "relative" }}>
            <form className={"container" + " " + section["section__signin"]} ref={formRef}>
                <label>Email: </label>
                <br/>
                <input type="email" required="required" placeholder="email@mail.com" />
                <br/>
                <label>Password: </label>
                <br/>
                <input type="password" required="required" placeholder="password" />
                <input type="submit" value="Sign in" className={section["section__submit"]} />
            </form>
        </div>
    );
};

export default SignIn;