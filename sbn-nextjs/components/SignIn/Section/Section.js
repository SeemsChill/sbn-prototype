//  Import built-in.
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
//  Import other components.
import Logo from "svg/IsoLogo/Logo";

//  Import modules.
import { useForm } from 'react-hook-form';
//  Import Auth.
import { sha256 } from "js-sha256";
//  Import fetching utils.
import { signIn, signUp } from "../../../utils/fetcher/query";
//  Import plugins.
import { notify } from "../../../utils/plugins/notify";
import { transSignIn, transSignUp } from '../../../utils/transitions/transition';
//  Import styles.
import styles from '@/signin_styles/Section.module.scss';


//  Section component.
const Section = () => {
  //  State.
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const { handleSubmit, register } = useForm();

  /*
  //  useRef().
  const hrRef = useRef(null);
  const sgiRef = useRef(null);
  const sguRef = useRef(null);
  const signinRef = useRef(null);
  const signupRef = useRef(null);
  const notifyRef = useRef(null);

  //  Transitions.
  const tsi = transSignIn(signinRef, signupRef, hrRef, sgiRef, sguRef);
  const tsu = transSignUp(signinRef, signupRef, hrRef, sgiRef, sguRef);


  //  Authentication.
  async function sbnSignIn({ email_signin, password_signin }) {
    const sha256_pass = sha256(`${password_signin}`);
    const res = await signIn(email_signin, sha256_pass);
    notify(res, setError, setSuccess, notifyRef, router.push);
  }

  async function sbnSignUp({ email_signup, username_signup, password_signup }) {
    const sha256_pass = sha256(`${password_signup}`);
    const res = await signUp(username_signup, email_signup, sha256_pass);
    notify(res, setError, setSuccess, notifyRef, router.push);
  };
  */

  return (
    <section className={`${styles['section']}`}>
      <div className={`container ${styles["container"]}`}>
        <div className={`${styles["iso"]}`}>
          <Logo/>
        </div>
        <div className={`container--pall flex flex-jc-c ${styles["content"]}`}>
          
          <span>Sign In</span>
          <hr/>
          <form>
                <label>Email: </label>
                <br/>
                <input type="email" required="required" placeholder="email@mail.com" {...register("email_signin")}/>
                <br/>
                <label>Password: </label>
                <br/>
                <input type="password" required="required" placeholder="password" {...register("password_signin")}/>
                <input type="submit" value="Sign in" className={`${styles["submit"]}`}/>
            </form>
            <p><a href="/">Forgot password?</a></p>
            <p>Not have account? <a href="/">Sign up here.</a></p>
        </div>
      </div>
    </section>
  );
};

export default Section;
