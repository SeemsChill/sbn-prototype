//  Import built-in.
import React, { useRef } from 'react';

//  Import other components.
import Container from './Container/Container';
import Span from './Span/Span';
import Hr from './Hr/Hr';
import SignIn from './Form/SignIn/SignIn';
import SignUp from './Form/SignUp/SignUp';

//  Import styles.
import section from './Section.module.scss';

const Section = () => {
  const hrRef = useRef(null);
  const sgiRef = useRef(null);
  const sguRef = useRef(null);
  const signinRef = useRef(null);
  const signupRef = useRef(null);

  // console.log(indiRef.current.style.transform = "translateX(100px)");

  function signup() {
    signinRef.current.style.transform = 'translateX(-400%)';
    signupRef.current.style.transform = 'translateX(287%)';
    hrRef.current.style.transform = 'translateX(100px)';
    sgiRef.current.style.transform = 'scale(1)';
    sguRef.current.style.transform = 'scale(1.2)';
  }

  function signin() {
    signinRef.current.style.transform = 'translateX(0%)';
    signupRef.current.style.transform = 'translateX(-400%)';
    hrRef.current.style.transform = 'translateX(-100px)';
    sgiRef.current.style.transform = 'scale(1.2)';
    sguRef.current.style.transform = 'scale(1)';
  }

  return (
    <section className={section['section']}>
      <Container>
        <div className={section['section__container']}>
          <Span callback={signin} spanRef={sgiRef}>
            Sign in
          </Span>
          <Span callback={signup} spanRef={sguRef}>
            Sign up
          </Span>
          <Hr hrRef={hrRef} />
          <SignIn formRef={signinRef} />
          <SignUp formRef={signupRef} />
        </div>
      </Container>
    </section>
  );
};

export default Section;
