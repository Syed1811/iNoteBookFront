import React, { useContext, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
// import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router";

const Notes = (props) => {
  const { getNotes } = useContext(noteContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);

  return (
    <>
      <AddNote showAlert={props.showAlert} mode={props.mode} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
    </>
  );
};

export default Notes;
