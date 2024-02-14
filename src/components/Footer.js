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
        <section className="col">
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-light m-1 "
            href="#!"
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
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-twitter iconHover" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-light m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa fa-envelope iconHover" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-light m-1 "
            href="#!"
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
            href="#!"
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
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-github iconHover" />
          </MDBBtn>
        </section>
        <section className="col mt-3">
          <span>© 2024 Copyright: All Right Reserved by Syed Raiyanullah</span>
        </section>
      </div>
    </MDBFooter>
  );
}
