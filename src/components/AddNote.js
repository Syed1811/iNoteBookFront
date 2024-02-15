import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Add Notes: iNoteBook</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Add new notes with iNoteBook - Your Secure Cloud Note-Taking App. Easily organize, edit, and delete notes with just a few clicks. Enjoy secure and convenient note-taking."
        />
        <meta
          name="keywords"
          content="iNoteBook, add notes, secure note-taking, cloud app, React, Bootstrap, CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Name" />
        <meta name="og:title" content="Add Notes: iNoteBook" />
        <meta
          name="og:description"
          content="Add new notes with iNoteBook - Your Secure Cloud Note-Taking App. Easily organize, edit, and delete notes with just a few clicks. Enjoy secure and convenient note-taking."
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://cloudinotebook.netlify.app/addnotes"
        />
        <meta name="og:image" content="url_to_your_logo_or_banner_image" />
        <link
          rel="canonical"
          href="https://cloudinotebook.netlify.app/addnotes"
        />
      </Helmet>

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
            placeholder="Title *(min length is 3)"
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
