import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "./Imgs/signupImg.png";
import { Helmet } from "react-helmet";
const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [TorF, setTorF] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    try {
      const response = await fetch(
        "https://inotebookbackend-6med.onrender.com/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData);
        props.showAlert("Invalid Details", "danger");
        return;
      }

      const json = await response.json();
      console.log(json);

      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        navigate("/");
        props.showAlert("Account Created Successfully!", "success");
      } else {
        props.showAlert("Invalid Details", "danger");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      props.showAlert("An error occurred during form submission", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const checkCon = () => {
    const { password, cpassword } = credentials;
    const passwordsMatch = password === cpassword;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialSymbolRegex = /[!@#$%^&*()_+{}:;<>,.?~`]/;
    const numberRegex = /\d/;
    const isComplexPassword =
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      specialSymbolRegex.test(password) &&
      numberRegex.test(password);

    setTorF(passwordsMatch && isComplexPassword);
  };

  return (
    <div
      style={{
        color: props.mode === "dark" ? "white" : "#000000",
        backgroundColor: props.mode === "light" ? "white" : "#000000",
      }}
    >
      <Helmet>
        <title>Sign Up: iNoteBook</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Sign up for iNoteBook - Your Secure Cloud Note-Taking App. Create an account to access powerful note-taking features and organize your notes securely. Join iNoteBook today!"
        />
        <meta
          name="keywords"
          content="iNoteBook, sign up, create account, secure notes, note-taking, React, Bootstrap, CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Name" />
        <meta name="og:title" content="Sign Up for iNoteBook" />
        <meta
          name="og:description"
          content="Sign up for iNoteBook - Your Secure Cloud Note-Taking App. Create an account to access powerful note-taking features and organize your notes securely. Join iNoteBook today!"
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://cloudinotebook.netlify.app/signup"
        />
        <meta name="og:image" content="url_to_your_logo_or_banner_image" />
        <link
          rel="canonical"
          href="https://cloudinotebook.netlify.app/signup"
        />
      </Helmet>

      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
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
              <div className="col-lg-6" style={{ marginBottom: "-50px" }}>
                <div className="card1 pb-5">
                  <div className="row text-center mt-3">
                    <h1>
                      Welcome to <span style={{ color: "#a952a3" }}>i</span>
                      Notebook
                    </h1>
                    <p className="font-italic text-muted mb-0">
                      Seamless note-taking on iNotebook – secure, cloud-powered.
                      <br /> Sign up for free and capture ideas effortlessly!
                    </p>
                  </div>
                  <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                    <img src={logo} className="image" alt="logo" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="card2 card border-0 px-4 py-5"
                  style={{
                    color: props.mode === "dark" ? "white" : "#000000",
                    backgroundColor:
                      props.mode === "light" ? "white" : "#000000",
                  }}
                >
                  <div className="row px-3">
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Name</h6>
                    </label>
                    <input
                      className="mb-4"
                      id="login__username"
                      type="text"
                      name="name"
                      onChange={onChange}
                      placeholder="Enter your Name"
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
                  <div className="row px-3 mb-4">
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Password</h6>
                    </label>
                    <input
                      type="password"
                      onInput={checkCon}
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

                  <div className="row px-3 mb-4">
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Confirm Password</h6>
                    </label>
                    <input
                      type="password"
                      onInput={checkCon}
                      onChange={onChange}
                      name="cpassword"
                      id="cpassword"
                      placeholder="Re-enter your password"
                      style={{
                        color: props.mode === "dark" ? "white" : "#000000",
                        backgroundColor:
                          props.mode === "light" ? "white" : "#000000",
                      }}
                      required
                    />
                  </div>

                  <div className="row mb-3 px-3">
                    <button
                      type="submit"
                      name="submitbtn"
                      disabled={TorF}
                      className="btn btn-bluee text-center"
                      style={{
                        width: "100%",
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="row mb-4 px-1 me-auto">
                    <small className="font-weight-bold">
                      Don't have an account?{" "}
                      <NavLink to="/login" className="text-danger ">
                        Login
                      </NavLink>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
