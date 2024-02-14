import React from "react";
import DisNote from "./DisNote";
import { NavLink } from "react-router-dom";
import logo from "./Imgs/homeImg.png";

const Home = (props) => {
  return (
    <>
      <div className="container home">
        <div className="row py-5 mt-4 align-items-center">
          <div className="col-md-5 pr-lg-5 mb-3 mb-md-0">
            <h1
              style={{
                fontFamily: "Pacifico",
                fontWeight: "bolder",
                fontSize: "50px",
                cursive: true,
                color: props.mode === "dark" ? "white" : "#000000",
              }}
            >
              <span style={{ color: "#a952a3" }}>i</span>Notebook
            </h1>
            <img src={logo} alt="icon" class="img-fluid mb-3 d-md-block"></img>
          </div>
          <div className="col-md-7 col-lg-6 ml-auto">
            <p className="font-italic mb-0">
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "25px",
                  color: props.mode === "dark" ? "white" : "#000000",
                }}
              >
                Your notebook on cloud - Safe and Secure
              </span>
              <br />
              <span
                style={{
                  fontSize: "12px",
                  color: props.mode === "dark" ? "white" : "#000000",
                }}
              >
                iNotebook is a{" "}
                <strong button-DLstyle={{ color: "black" }}>secure way</strong>{" "}
                to take notes. It stores all your notes and categorises them on
                the basis of the provided tags. Moreover, these notes are{" "}
                <strong button-DLstyle={{ color: "black" }}>
                  stored on the cloud!
                </strong>{" "}
                Hence, you can{" "}
                <strong button-DLstyle={{ color: "black" }}>
                  access them from anywhere
                </strong>{" "}
                and from any device you wish.
              </span>
            </p>
            <div className="mt-3 text-center">
              <NavLink to="/createNote" type="button" className="btnNewNotes">
                Create New Note
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <DisNote showAlert={props.showAlert} mode={props.mode} />
    </>
  );
};

export default Home;
