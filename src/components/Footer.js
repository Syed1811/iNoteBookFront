import React from "react";
import { MDBFooter, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function Footer(props) {
  return (
    <MDBFooter
      className="text-center text-white mt-5"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div
        className="text-center p-1 row"
        style={{
          color: props.mode === "dark" ? "##000000" : "white",
          backgroundColor: props.mode === "light" ? "#383737" : "#383737",
        }}
      >
        <section className="col mt-3">
          <span>Syed Raiyanullah</span>
        </section>
        <section className="col">
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-light m-1 "
            href="https://www.facebook.com/raiyanullah.raiyanullah"
            target="_blank"
            role="button"
          >
            <MDBIcon fab className="fab fa-facebook-f iconHover" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-light m-1 "
            href="https://twitter.com/Syed18112002"
            target="_blank"
            role="button"
          >
            <MDBIcon fab className="fa-twitter iconHover" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-light m-1 "
            href="https://www.instagram.com/syedraiyanullah/?utm_source=qr"
            target="_blank"
            role="button"
          >
            <MDBIcon fab className="fa-instagram iconHover" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-light m-1 "
            href="https://www.linkedin.com/in/syed1811"
            target="_blank"
            role="button"
          >
            <MDBIcon fab className="fa-linkedin iconHover" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-light m-1 "
            href="https://github.com/Syed1811"
            target="_blank"
            role="button"
          >
            <MDBIcon fab className="fa-github iconHover" />
          </MDBBtn>
        </section>
      </div>
    </MDBFooter>
  );
}
