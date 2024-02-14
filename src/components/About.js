import React from "react";

const About = (props) => {
  return (
    <div
      className="container my-3"
      style={{
        height: "65vh",
      }}
    >
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
