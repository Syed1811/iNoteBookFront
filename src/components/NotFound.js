import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Imgs/404Img.png";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className="mainNFA">
      <Helmet>
        <title>404 Not Found: iNoteBook</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Explore iNoteBook - Your Secure Cloud Note-Taking App and discover our features."
        />
        <meta
          name="keywords"
          content="iNoteBook, 404, not found, secure notes, note-taking, React, Bootstrap, CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="author" content="Your Name" />
        <meta name="og:title" content="404 Not Found: iNoteBook" />
        <meta
          name="og:description"
          content="Oops! The page you're looking for doesn't exist. Explore iNoteBook - Your Secure Cloud Note-Taking App and discover our features."
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://cloudinotebook.netlify.app/404" />
        <meta name="og:image" content="url_to_your_logo_or_banner_image" />
        <link rel="canonical" href="https://cloudinotebook.netlify.app/404" />
      </Helmet>

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
        <div className="form-group col-lg-12 mb-0">
          <NavLink
            to="/"
            className="btn btn-notfound btn-block py-2 ms-auto me-auto"
            style={{ width: "50%" }}
          >
            <span className="font-weight-bold">Home</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
