//  Import built-in.
import React from "react";

//  Import styles.
import section from "../../Section.module.scss";

const SignUp = ({ formRef }) => {
    
    return(
        <div style={{ position: "relative" }}>
            <form className={"container" + " " + section["section__signup"]} ref={formRef}>
                <label>Email: </label>
                <br/>
                <input type="email" required="required" placeholder="email@mail.com" />
                <br/>
                <label>Username: </label>
                <input type="text" required="required" placeholder="username"/>
                <br/>
                <label>Password: </label>
                <br/>
                <input type="password" required="required" placeholder="password" />
                <br/>
                <input type="submit" value="Sign up" className={section["section__submit"]} />
            </form>
        </div>
    );
};

export default SignUp;