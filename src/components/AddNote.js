import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div
      className="container my-3 ct"
      style={{ maxWidth: "540px", height: "68vh" }}
    >
      <div className="backHome mb-3">
        <NavLink
          to="/"
          style={{
            color: "#a952a3",
          }}
        >
          <FaArrowLeft /> Home
        </NavLink>
      </div>
      <h1
        className="d-flex"
        style={{
          color: props.mode === "dark" ? "white" : "#000000",
          fontWeight: "bolder",
        }}
      >
        Add Your Note
      </h1>
      <h6
        style={{
          color: props.mode === "dark" ? "white" : "#000000",
        }}
      >
        Add a new note with your info / notes
      </h6>
      <form className="my-3">
        <div className="mb-3">
          <input
            type="text"
            className="form-control widthS impB"
            id="title"
            name="title"
            placeholder="Title *"
            aria-describedby="emailHelp"
            value={note.title}
            style={{
              color: props.mode === "dark" ? "white" : "#000000",
              backgroundColor: props.mode === "light" ? "white" : "#000000",
              border: `1px solid ${
                props.mode === "dark" ? "white" : "#000000"
              }`,
            }}
            onChange={onChange}
            minLength={3}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control widthS impB"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
            placeholder="Tag *"
            minLength={5}
            style={{
              color: props.mode === "dark" ? "white" : "#000000",
              backgroundColor: props.mode === "light" ? "white" : "#000000",
              border: `1px solid ${
                props.mode === "dark" ? "white" : "#000000"
              }`,
            }}
            required
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control newA impB"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
            placeholder="Description *"
            minLength={5}
            style={{
              color: props.mode === "dark" ? "white" : "#000000",
              backgroundColor: props.mode === "light" ? "white" : "#000000",
              border: `1px solid ${
                props.mode === "dark" ? "white" : "#000000"
              }`,
            }}
            required
          />
        </div>

        <div className="text-center">
          <button
            disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            className="btn btn-secondary up1"
            style={{ width: "100%" }}
            onClick={handleClick}
          >
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
