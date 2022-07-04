import { Row, Col, Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import styles from "../styles/LoginSignUp.module.css";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const EmailValidator = () => {
    var x = document.getElementById("email_");

    if (emailReg.test(email)) {
      x.classList.remove("is-invalid");
      x.classList.add("is-valid");
    } else {
      x.classList.remove("is-valid");
      x.classList.add("is-invalid");
    }
  };

  const PassValidator = () => {
    var x = document.getElementById("pass_");
    var y = document.getElementById("passCon_");

    if ((password == confirmPassword) && password.length >= 4) {
      x.classList.remove("is-invalid");
      x.classList.add("is-valid");
      y.classList.remove("is-invalid");
      y.classList.add("is-valid");
    } else {
      x.classList.remove("is-valid");
      x.classList.add("is-invalid");
      y.classList.remove("is-valid");
      y.classList.add("is-invalid");
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
              <p className="h3 my-2 align-self-start">Welcome to</p>
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
                onBlur={() => {
                  EmailValidator();
                }}
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
                className={`${styles.inputStyles} px-2 my-2 mx-2 w-100 py-2 form-control`}
                placeholder="Password"
                id="pass_"
                onBlur={() => {
                  PassValidator();
                }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                type="password"
                className={`${styles.inputStyles} px-2 my-2 mx-2 w-100 py-2 form-control`}
                placeholder="Confirm Password"
                id="passCon_"
                onBlur={() => {
                  PassValidator();
                }}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />

              <div className="d-flex justify-content-between align-items-center w-100 flex-row">
                <div className="d-flex justify-content-start align-items-center">
                  <p className="mx-1 my-2">Remember me</p>
                  <input
                    type="checkbox"
                    className={`mx-1 my-2 form-check-input`}
                  />
                </div>
              </div>

              <div className="form-check paddLeftZero d-flex justify-content-start align-items-center w-100">
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
                <input
                  className={`mx-1 my-2 form-check-input`}
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
              </div>

              <div className="d-flex justify-content-center align-items-center w-100 flex-row">
                <p className="mx-2 my-2">Already a Member?</p>
                <Link href="/login">
                  <a className={`${styles.anchorTagStyles} mx-2 my-2`}>Login</a>
                </Link>
              </div>

              <Button
                variant="contained"
                className="materialUiButton my-2 w-100 py-2"
              >
                Sign Up
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
