//  Import built-in.
import React from "react";
//  Import modules.
import { useForm } from 'react-hook-form';

//  Import styles.
import styles from "@/signin_styles/Section.module.scss";


const Form = () => {

    const { handleSubmit, register } = useForm();

    return (
        <form>
            <label>Email: </label>
            <br />
            <input type="email" required="required" placeholder="email@mail.com" {...register("email_signin")} />
            <br />
            <label>Password: </label>
            <br />
            <input type="password" required="required" placeholder="password" {...register("password_signin")} />
            <input type="submit" value="Sign in" className={`${styles["submit"]}`} />
        </form>
    );
};

export default Form;