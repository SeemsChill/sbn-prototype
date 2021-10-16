//  This notify using for both sign-up and sign-in.
const notify = (res, setError, setSuccess, notifyRef, push) => {
    //  Set auth.
    if (res.success) {
        //  Set the JWT token.
        localStorage.setItem("Authorization", res.token);
        //  State the error and success message.
        setError("");
        setSuccess(res.success);

        //  Animation the notify.
        notifyRef.current.style.opacity = "1";
        notifyRef.current.style.visibility = "visible";
        setTimeout(() => {
            notifyRef.current.style.opacity = "0";
            notifyRef.current.style.visibility = "hidden";
            push("/");
        }, 3000);
    } else {
        //  State the error and success message.
        setSuccess("");
        setError(res.error);

        //  Animation the notify.
        notifyRef.current.style.opacity = "1";
        notifyRef.current.style.visibility = "visible";
        setTimeout(() => {
            notifyRef.current.style.opacity = "0";
            notifyRef.current.style.visibility = "hidden";
            push("/");
        }, 3000);
    }
};

export { notify };