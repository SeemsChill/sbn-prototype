//  Import built-in.
import React, { useEffect, useState, useRef } from 'react';

//  Import other components.
import Container from './Container/Container';
import Span from './Span/Span';
import Hr from './Hr/Hr';
import SignIn from './Form/SignIn/SignIn';
import SignUp from './Form/SignUp/SignUp';
import Notify from './Notify/Notify';

//  Import modules.
import { useForm } from 'react-hook-form';

//  Import Auth.
import { sha256 } from "js-sha256";

//  Import fetching utils.
import { signUp } from "../../../utils/query";

//  Import styles.
import section from './Section.module.scss';

const Section = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { handleSubmit, register } = useForm();

  //  useRef().
  const hrRef = useRef(null);
  const sgiRef = useRef(null);
  const sguRef = useRef(null);
  const signinRef = useRef(null);
  const signupRef = useRef(null);

  const notifyRef = useRef(null);

  function signup() {
    signinRef.current.style.transform = 'translateX(-400%)';
    signupRef.current.style.transform = 'translateX(360%)';
    hrRef.current.style.transform = 'translateX(100px)';
    sgiRef.current.style.transform = 'scale(1)';
    sguRef.current.style.transform = 'scale(1.2)';
  };

  function signin() {
    signinRef.current.style.transform = 'translateX(0%)';
    signupRef.current.style.transform = 'translateX(-400%)';
    hrRef.current.style.transform = 'translateX(-100px)';
    sgiRef.current.style.transform = 'scale(1.2)';
    sguRef.current.style.transform = 'scale(1)';
  };

  async function classicRegister({ email_signup, username_signup, password_signup }) {
    const sha256_pass = sha256(`${password_signup}`);
    const res = await signUp(username_signup, email_signup, sha256_pass);

    /*
    notifyRef.current.style.opacity = "1";
    notifyRef.current.style.visibility = "visible";
    setTimeout(() => {
      notifyRef.current.style.opacity = "0";
      notifyRef.current.style.visibility = "hidden";
    }, 3000);
    */
    //  Set auth.
    if (res.success) {
      localStorage.setItem("Authorization", res.token);
      setError("");
      setSuccess(res.success);
      notifyRef.current.style.opacity = "1";
      notifyRef.current.style.visibility = "visible";
      setTimeout(() => {
        notifyRef.current.style.opacity = "0";
        notifyRef.current.style.visibility = "hidden";
        // setSuccess("");
      }, 3000);
    } else {
      setSuccess("");
      setError(res.error);
      notifyRef.current.style.opacity = "1";
      notifyRef.current.style.visibility = "visible";
      setTimeout(() => {
        notifyRef.current.style.opacity = "0";
        notifyRef.current.style.visibility = "hidden";
        // setError("");
      }, 3000);
    }
  };

  return (
    <section className={section['section']}>
      <Container>
        <div className={section['section__container']}>
          <div className={"flex flex-d-c"}>
            <div style={{ position: "relative" }}>
              <Notify notifyRef={notifyRef} message={success ? { "success": success} : { "error": error} }/>
            </div>
            <div style={{ width: "25rem" }}>
              <Span callback={signin} spanRef={sgiRef}>
                Sign in
              </Span>
              <Span callback={signup} spanRef={sguRef}>
                Sign up
              </Span>
            </div>
          </div>
          <Hr hrRef={hrRef} />
          <SignIn formRef={signinRef} />
          <SignUp callback={classicRegister} formRef={signupRef} handleSubmit={handleSubmit} register={register} />
        </div>
      </Container>
    </section>
  );
};

export default Section;
