import React from "react";
import { Helmet } from "react-helmet";

const About = (props) => {
  return (
    <div
      className="container my-3"
      style={{
        height: "65vh",
      }}
    >
      <Helmet>
        <title>About Us: iNoteBook</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Learn more about iNoteBook - Your Secure Cloud Note-Taking App. Discover the features, technology stack, and the team behind the development."
        />
        <meta
          name="keywords"
          content="iNoteBook, about us, team, technology stack, secure notes, React, Bootstrap, CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Name" />
        <meta name="og:title" content="About Us: iNoteBook" />
        <meta
          name="og:description"
          content="Learn more about iNoteBook - Your Secure Cloud Note-Taking App. Discover the features, technology stack, and the team behind the development."
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://cloudinotebook.netlify.app/about"
        />
        <meta name="og:image" content="url_to_your_logo_or_banner_image" />
        <link rel="canonical" href="https://cloudinotebook.netlify.app/about" />
      </Helmet>

      <h1
        className="text-center my-5"
        style={{
          color: props.mode === "dark" ? "white" : "#000000",
        }}
      >
        About iNotebook
      </h1>
      <div
        style={{
          color: props.mode === "dark" ? "white" : "#000000",
        }}
      >
        {" "}
        iNotebook is a{" "}
        <strong className="mark" style={{ color: "black" }}>
          secure way
        </strong>{" "}
        to take notes. It stores all your notes and categorises them on the
        basis of the provided tags. Moreover, these notes are{" "}
        <strong className="mark" style={{ color: "black" }}>
          stored on the cloud!
        </strong>{" "}
        Hence, you can{" "}
        <strong className="mark" style={{ color: "black" }}>
          access them from anywhere
        </strong>{" "}
        and from any device you wish. Notes can be{" "}
        <strong className="mark" style={{ color: "black" }}>
          {" "}
          edited and deleted{" "}
        </strong>{" "}
        with just a single click. The best part is this service is{" "}
        <strong className="mark" style={{ color: "black" }}>
          completely free!!
        </strong>
      </div>
    </div>
  );
};

export default About;
