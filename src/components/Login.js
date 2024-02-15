import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "./Imgs/loginImg.png";
import { Helmet } from "react-helmet";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Logged in Successfully!", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <Helmet>
          <title>Login: iNoteBook</title>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Login to iNoteBook - Your Secure Cloud Note-Taking App. Access your notes securely and manage your account. Stay organized with easy login and note-taking features."
          />
          <meta
            name="keywords"
            content="iNoteBook, login, secure login, account management, note-taking, React, Bootstrap, CSS"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Your Name" />
          <meta name="og:title" content="Login to iNoteBook" />
          <meta
            name="og:description"
            content="Login to iNoteBook - Your Secure Cloud Note-Taking App. Access your notes securely and manage your account. Stay organized with easy login and note-taking features."
          />
          <meta name="og:type" content="website" />
          <meta
            name="og:url"
            content="https://cloudinotebook.netlify.app/login"
          />
          <meta name="og:image" content="url_to_your_logo_or_banner_image" />
          <link
            rel="canonical"
            href="https://cloudinotebook.netlify.app/login"
          />
        </Helmet>

        <div
          className="card card0 border-0"
          style={{
            color: props.mode === "dark" ? "white" : "#000000",
            backgroundColor: props.mode === "light" ? "white" : "#000000",
            boxShadow: `0px 1px 4px 0px ${
              props.mode === "dark" ? "white" : "#000000"
            }`,
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="row d-flex">
              <div
                className="col-lg-6"
                style={{
                  marginBottom: "-50px",
                }}
              >
                <div className="card1 pb-5">
                  <div className="row text-center mt-3 p-2">
                    <h1>
                      Welcome back to{" "}
                      <span style={{ color: "#a952a3" }}>i</span>
                      Notebook
                    </h1>
                    <p className="font-italic text-muted mb-0">
                      Are you ready to access your Notebook?
                      <br /> Log in now!
                    </p>
                  </div>
                  <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                    <img src={logo} className="image" alt="logo" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 loginBox">
                <div
                  className="card2 card  cardL2 border-0 px-4 py-5"
                  style={{
                    color: props.mode === "dark" ? "white" : "#000000",
                    backgroundColor:
                      props.mode === "light" ? "white" : "#000000",
                  }}
                >
                  <div className="row px-3">
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Email Address</h6>
                    </label>
                    <input
                      className="mb-4"
                      id="login__username"
                      type="email"
                      name="email"
                      value={credentials.email}
                      onChange={onChange}
                      placeholder="Enter a valid email address"
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#000000",
                      }}
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="row px-3">
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Password</h6>
                    </label>
                    <input
                      type="password"
                      value={credentials.password}
                      onChange={onChange}
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#000000",
                      }}
                      required
                    />
                  </div>
                  <div class="d-flex justify-content-between align-items-center smrem mt-2 mb-1 px-1">
                    <NavLink to="/#!" class="text-body ms-auto">
                      Forgot password?
                    </NavLink>
                  </div>
                  <div className="row mb-3 px-3">
                    <button
                      type="submit"
                      className="btn btn-bluee text-center"
                      style={{
                        width: "100%",
                      }}
                    >
                      Login
                    </button>
                  </div>
                  <div className="row mb-4 px-1 me-auto">
                    <small className="font-weight-bold">
                      Don't have an account?{" "}
                      <NavLink to="/signup" className="text-danger ">
                        Register
                      </NavLink>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
