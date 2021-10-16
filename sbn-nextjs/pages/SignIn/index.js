//  Import built-in.
import React, { useEffect } from "react";
import { useRouter } from "next/router";
//  Import the components.
import Header from "../../components/Credential/CredentialHeader/Header";
import Section from "../../components/Credential/CredentialSection/Section";

const SignIn = () => {

    const router = useRouter();

    useEffect(() => {
        if (localStorage.getItem("Authorization")) {
            router.push("/");
        }
    }, []);

    return (
        <>
            <Header />
            <Section />
        </>
    );
};

export default SignIn;