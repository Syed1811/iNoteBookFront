import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Imgs/404Img.png";

const NotFound = () => {
  return (
    <div className="mainNFA">
      <div className="mainNF">
        <img
          src={logo}
          alt="Page Not Found"
          className="img-fluid"
          style={{
            width: "440px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <p className="errorHeadeing">
          The page you're loking for can't be found
        </p>
        <div className="form-group col-lg-12 mx-auto mb-0">
          <NavLink to="/" className="btn btn-notfound btn-block py-2">
            <span className="font-weight-bold">Home</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
