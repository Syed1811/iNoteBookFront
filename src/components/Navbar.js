import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";

const Navbar = (props) => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  let location = useLocation();
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-{props.mode === "light" ? "white" : "#000000} bg-{props.mode === "light" ? "white" : "#000000}`}
    >
      <div className="container-fluid">
        <Link
          to="/"
          style={{
            fontFamily: "Pacifico",
            cursive: true,
            color: props.mode === "dark" ? "white" : "#000000",
          }}
          className="navbar-brand"
        >
          <span style={{ color: "#a952a3" }}>i</span>Notebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            color: props.mode === "dark" ? "white" : "#000000",
            backgroundColor: props.mode === "light" ? "white" : "#000000",
            border: `1px solid ${props.mode === "dark" ? "white" : "#000000"}`,
          }}
        >
          <FaBarsStaggered />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                style={{
                  color: props.mode === "dark" ? "white" : "#000000",
                }}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                style={{
                  color: props.mode === "dark" ? "white" : "#000000",
                }}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <div
            class={`checkbox-wrapper-54 mt-2 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <label class="switch">
              <input type="checkbox" onClick={props.toggleMode} />
              <span class="slider"></span>
            </label>
          </div>
          {!localStorage.getItem("token") ? (
            <form className="d-flex"></form>
          ) : (
            <button
              onClick={handleLogout}
              className="btn out btn-danger ms-auto"
            >
              Logout <IoMdLogOut />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
