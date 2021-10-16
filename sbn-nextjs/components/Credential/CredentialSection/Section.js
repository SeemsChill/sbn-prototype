//  Import built-in.
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
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
import { signIn, signUp } from "../../../utils/query";
//  Import plugins.
import { notify } from "../../../utils/plugins/notify";
import { transSignIn, transSignUp } from '../../../utils/transitions/transition';
//  Import styles.
import section from './Section.module.scss';





//  Section component.
const Section = () => {
  //  State.
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const { handleSubmit, register } = useForm();

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

  return (
    <section className={section['section']}>
      <Container>
        <div className={"flex flex-d-c"}>
          <Notify notifyRef={notifyRef} message={success ? { "success": success } : { "error": error }} />
          <div style={{ width: "25rem" }}>
            <Span callback={tsi} spanRef={sgiRef}>Sign in</Span>
            <Span callback={tsu} spanRef={sguRef}>Sign up</Span>
          </div>
        </div>
        <Hr hrRef={hrRef} />
        <SignIn callback={sbnSignIn} formRef={signinRef} handleSubmit={handleSubmit} register={register} />
        <SignUp callback={sbnSignUp} formRef={signupRef} handleSubmit={handleSubmit} register={register} />
      </Container>
    </section>
  );
};

export default Section;
