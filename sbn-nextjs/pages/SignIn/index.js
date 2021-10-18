//  Import built-in.
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
//  Import the components.
import Header from "../../components/Credential/CredentialHeader/Header";
import Section from "../../components/Credential/CredentialSection/Section";

//  Import fetching method.
import { verify } from "../../utils/query";

const SignIn = () => {
    const [display, setDisplay] = useState(false);

    const router = useRouter();

    useEffect(async () => {
        if (localStorage.getItem("Authorization")) {
            const res = await verify();
            if (!res.package) {
                localStorage.removeItem("Authorization");
            } else {
                router.push("/");
            }
        } else {
            setDisplay(true);
        }
    }, []);

    return (
        <>
            {display ? (
                <>
                    <Header />
                    <Section />
                </>
            ) : (
                <>
                </>
            )}
        </>
    );
};

export default SignIn;