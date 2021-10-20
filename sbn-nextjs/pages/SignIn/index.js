//  Import built-in.
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
//  Import the components.
import Header from "@/SignIn/Header/Header";
import Section from "@/SignIn/Section/Section";

//  Import fetching method.
import { verify } from "../../utils/fetcher/query";

const SignIn = () => {
    //  States.
    const [display, setDisplay] = useState(false);

    //  Extract the router.
    const router = useRouter();

    //  Checking on signing in.
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