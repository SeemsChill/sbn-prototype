const transSignUp = (signinRef, signupRef, hrRef, sgiRef, sguRef) => {
    return function () {
        signinRef.current.style.transform = 'translateX(-400%)';
        signupRef.current.style.transform = 'translateX(360%)';
        hrRef.current.style.transform = 'translateX(100px)';
        sgiRef.current.style.transform = 'scale(1)';
        sguRef.current.style.transform = 'scale(1.2)';
    }
};

const transSignIn = (signinRef, signupRef, hrRef, sgiRef, sguRef) => {
    return function () {
        signinRef.current.style.transform = 'translateX(0%)';
        signupRef.current.style.transform = 'translateX(-400%)';
        hrRef.current.style.transform = 'translateX(-100px)';
        sgiRef.current.style.transform = 'scale(1.2)';
        sguRef.current.style.transform = 'scale(1)';
    }
};

export { transSignIn, transSignUp }