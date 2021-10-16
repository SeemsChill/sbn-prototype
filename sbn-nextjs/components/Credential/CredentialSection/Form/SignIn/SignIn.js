//  Import built-in.
import React from "react";

import section from "../../Section.module.scss";

const SignIn = ({ callback, formRef, handleSubmit, register }) => {
    return(
        <div style={{ position: "relative" }}>
            <form className={"container" + " " + section["section__signin"]} onSubmit={handleSubmit(callback)} ref={formRef}>
                <label>Email: </label>
                <br/>
                <input type="email" required="required" placeholder="email@mail.com" {...register("email_signin")}/>
                <br/>
                <label>Password: </label>
                <br/>
                <input type="password" required="required" placeholder="password" {...register("password_signin")}/>
                <input type="submit" value="Sign in" className={section["section__submit"]} />
            </form>
        </div>
    );
};

export default SignIn;