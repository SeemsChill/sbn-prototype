//  Import built-in.
import React from "react";

//  Import styles.
import section from "../../Section.module.scss";

const SignUp = ({ callback, formRef, handleSubmit,register }) => {

    return(
        <div style={{ position: "relative" }}>
            <form  onSubmit={handleSubmit(callback)} className={"container" + " " + section["section__signup"]} ref={formRef}>
                <label>Email: </label>
                <br/>
                <input type="email" required="required" placeholder="email@mail.com" {...register("email_signup")}/>
                <br/>
                <label>Username: </label>
                <input type="text" required="required" placeholder="username"{...register("username_signup")}/>
                <br/>
                <label>Password: </label>
                <br/>
                <input type="password" required="required" placeholder="password" {...register("password_signup")}/>
                <br/>
                <input type="submit" value="Sign up" className={section["section__submit"]} />
            </form>
        </div>
    );
};

export default SignUp;