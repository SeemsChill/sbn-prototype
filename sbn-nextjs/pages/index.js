import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { sha256 } from "js-sha256";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [csrf, setCSRF] = useState("");

  const { handleSubmit, register } = useForm();

  function classicRegister({ username_reg, email_reg, password_reg }) {

    const sha256_pass = sha256(`${password_reg}`);
    fetch("http://localhost:8000/api/post/register/create/user/", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        "X-CSRFToken": `${csrf}`
      }),
      body: JSON.stringify({
        "uid": `${uuidv4()}`,
        "username": `${username_reg}`,
        "email": `${email_reg}`,
        "platform": `password`,
        "password": `${sha256_pass}`
      }),
      credentials: "include",
    });
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

  function classicLogin({ email_log, password_log }) {
    signInClassic(email_log, password_log).then((user) => {
      console.log(user);
    });
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/get/csrf/", {
      credentials: "include"
    }).then((res) => {
      setCSRF(res.headers.get("X-CSRFToken"));
    });
  }, []);

  return (
    <>
      <>
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
          <input type="submit" />
        </form>
        <br />
      </>
      <>
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
          <input type="submit" />
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
          <input type="submit" />
        </form>
        <br />
        <button onClick={() => signInWithGithub()}>Github</button>
      </>
    </>
  )
}
