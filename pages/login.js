import { Row, Col, Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import styles from "../styles/LoginSignUp.module.css";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import baseUrl from "../helpers/baseUrl";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import { useStateContext } from "../contexts/contextProvider";

var jwt = require("jsonwebtoken");

export default function Login() {
  const { userStatusToken, setUserStatusToken } = useStateContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  ///////
  const [emailValid, setEmailValid] = useState(false);
  ///////

  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleLogin = async (e) => {
    var x = document.getElementById("email_");

    if (emailReg.test(email)) {
      x.classList.remove("is-invalid");
      x.classList.add("is-valid");
      setEmailValid(true);
    } else {
      x.classList.remove("is-valid");
      x.classList.add("is-invalid");
      setEmailValid(false);
    }
    console.log("Running");
    e.preventDefault();

    if (emailValid) {
      const res = await fetch(`${baseUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const res2 = await res.json();
      if (res2.error) {
        console.log(`${email} anddd ${password}`);
        console.log(res);
      } else {
        console.log(res2);
        cookie.set("token", res.token);
        console.log("Login Successful!!!!!!!!!!!!");
        router.push("/dashboard");
        setUserStatusToken(res.token);
        console.log(userStatusToken);
        var decoded = jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyZDJhYmIxOGZmZDg4NDAzZDM4ODZkZSIsImVtYWlsIjoiYWhhZEBzb21lb25lLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJDMxMnJLcUJpekhlOW4uVEljN1hlSC50QkkuWFB6SDZzTk1PbzVoeTBMc0Mzdy5ET1B5LzVlIiwiZnVsbE5hbWUiOiJBYmR1bCBBaGFkIiwiX192IjowfSwiaWF0IjoxNjU3OTgzMDg3LCJleHAiOjE2NTc5ODY2ODd9.FzCCqx1Ggfpv90zMHlsjkZPIFcxMGt-m0a-FNe5q_mo");
        console.log(`JWT: ${decoded}`);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Login | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Container>
        <Row
          className="d-flex justify-content-center align-items-center py-3 my-3"
          style={{ minHeight: "80vh" }}
        >
          <Col lg={5}>
            <form className="d-flex justify-content-center align-items-center flex-column">
              <p className="h3 my-2 align-self-start">Login to</p>
              <img
                src="/images/home/logo.png"
                height={100}
                alt="SayabiDevs"
                className="mb-3"
              />

              <input
                type="email"
                className={`${styles.inputStyles} px-2 my-2 mx-2 w-100 py-2 form-control`}
                placeholder="Email"
                id="email_"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="valid-feedback mx-3">Looks good!</div>
              <div className="invalid-feedback mx-3">
                Enter a valid Email Address
              </div>

              <input
                type="password"
                className={`${styles.inputStyles} px-2 my-2 mx-2 w-100 py-2`}
                placeholder="Password"
                id="validationCustom01"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <div className="d-flex justify-content-between align-items-center w-100 flex-row">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mx-1 my-2">Remember me</p>
                  <input
                    type="checkbox"
                    className={`mx-1 my-2`}
                    name=""
                    id=""
                  />
                </div>
                <a href="" className={`${styles.anchorTagStyles} mx-2 my-1`}>
                  Forget Password?
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center w-100 flex-row">
                <p className="mx-2 my-2">Not a member?</p>
                <Link href="/signup">
                  <a className={`${styles.anchorTagStyles} mx-2 my-2`}>
                    Register
                  </a>
                </Link>
              </div>

              <Button
                variant="contained"
                className="materialUiButton my-2 w-100 py-2"
                onClick={(e) => handleLogin(e)}
              >
                Login
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
