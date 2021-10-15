//  Import built-in.
import React, { useEffect, useState } from "react";

//  Import other components.
import Head from "../components/HomeHeader/Header";

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Head theme={theme} setTheme={setTheme} />
    </>
  )
}

/*
{!uid ? (
        <>
          {success ? (<p>{success}</p>) : (<></>)}
          {error ? (<p>{error}</p>) : (<></>)}
          <h1>Register</h1>
          <form onSubmit={handleSubmit(classicRegister)}>
            <label>Username:</label>
            <input placeholder="username" {...register("username_reg")} />
            <br />
            <label>Email:</label>
            <input placeholder="email" {...register("email_reg")} />
            <br />
            <label>Password:</label>
            <input type="password" placeholder="password" {...register("password_reg")} />
            <br />
            <input type="submit" value="Sign up" />
          </form>
          <br />
          <h1>Log In</h1>
          <form onSubmit={handleSubmit(classicLogin)}>
            <label>Email:</label>
            <input placeholder="email" {...register("email_log")} />
            <br />
            <label>Password:</label>
            <input placeholder="password" {...register("password_log")} />
            <br />
            <input type="submit" value="Sign in" />
          </form>
          <br />
        </>
      ) : (
        <>
          {success ? (<p>{success}</p>) : (<></>)}
          {error ? (<p>{error}</p>) : (<></>)}
          <h1>Log out:</h1>
          <button onClick={() => logOut()}>Log out</button>
          <br />
          <br />
          <h1>Update</h1>
          <form onSubmit={handleSubmit(updateInfo)}>
            <label>Fullname: </label>
            <input placeholder="full name" {...register("fullName_up")} />
            <br />
            <label>First destination: </label>
            <input placeholder="vd: Tỉnh Tiền Giang" {...register("firstDest_up")} />
            <br />
            <label>Second destination: </label>
            <input placeholder="vd: Thị xã Gò Công" {...register("secondDest_up")} />
            <br />
            <label>Third destination:</label>
            <input placeholder="vd: Phường 3" {...register("thirdDest_up")} />
            <br />
            <label>Detail address: </label>
            <textarea placeholder="vd: Khu phố 3, đường Trần Hưng Đạo" {...register("detailAdr_up")} />
            <br />
            <label>Phone number: </label>
            <input placeholder="vd: +84865322376" {...register("phoneNumber_up")} />
            <br />
            <input type="submit" value="Update" />
          </form>
          <br />
          <br />
          <h1>Delete</h1>
          <form onSubmit={handleSubmit(delUser)}>
            <label>Password: </label>
            <input type="password" placeholder="password" {...register("password_del")} />
            <br />
            <input type="submit" value="Delete" />
          </form>
        </>
      )}
*/


/*

import { useForm } from "react-hook-form";
import { sha256 } from "js-sha256";

import { del, signIn, signUp, verify } from "../utils/query";
import ButtonHolder from "../components/Button/ButtonHolder";

const [uid, setUid] = useState(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { handleSubmit, register } = useForm();

  async function classicRegister({ username_reg, email_reg, password_reg }) {
    const sha256_pass = sha256(`${password_reg}`);
    const res = await signUp(username_reg, email_reg, sha256_pass);
    //  Set auth.
    if (res.success) {
      localStorage.setItem("Authorization", res.token);
      setSuccess(res.success);
      setTimeout(() => {
        setUid(res.uid);
        setSuccess("");
      }, 3000);
    } else {
      setError(res.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  async function classicLogin({ email_log, password_log }) {
    const sha256_pass = sha256(`${password_log}`);
    const res = await signIn(email_log, sha256_pass);
    if (res.success) {
      setSuccess(res.success)
      localStorage.setItem("Authorization", res.token);
      setTimeout(() => {
        setUid(res.uid);
        setSuccess("");
      }, 3000);
    } else {
      setError(res.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  function updateInfo({ fullName_up, firstDest_up, secondDest_up, thirdDest_up, detailAdr_up, phoneNumber_up }) {
    fetch("http://localhost:8000/api/post/register/update/user/", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        "X-CSRFToken": `${csrf}`
      }),
      body: JSON.stringify({
        "uid": `efe9b1b3-7ecf-417b-bcd3-25ce491dcfcd`,
        "full_name": `${fullName_up}`,
        "first_dest": `${firstDest_up}`,
        "second_dest": `${secondDest_up}`,
        "third_dest": `${thirdDest_up}`,
        "detail_adr": `${detailAdr_up}`,
        "phone_number": `${phoneNumber_up}`
      }),
      credentials: "include"
    });
  };

  function logOut() {
    setError("Log out in 3 seconds");
    localStorage.removeItem("Authorization");
    setTimeout(() => {
      setUid(null);
      setError("");
    }, 3000);
  }

  async function delUser({ password_del }) {
    const sha256_pass = sha256(`${password_del}`);
    const res = await del(sha256_pass);
    if (res.success) {
      localStorage.removeItem("Authorization");
      setSuccess(res.success);
      setTimeout(() => {
        setSuccess("");
        setUid(null);
      }, 3000);
    } else {
      setError(res.error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }

  useEffect(async () => {
    if (localStorage.getItem("Authorization")) {
      const res = await verify();
      if (res.uid) {
        setUid(uid);
      } else {
        localStorage.removeItem("Authorization");
      }
    }
  }, []);
*/