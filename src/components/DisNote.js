import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
// import AddNote from "./AddNote";
import { useNavigate } from "react-router";
import { IoIosCloseCircleOutline } from "react-icons/io";

const DisNote = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
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
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Updated Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade textB"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{
                color: props.mode === "dark" ? "white" : "#000000",
                backgroundColor: props.mode === "light" ? "white" : "#000000",
                border: `1px solid ${
                  props.mode === "dark" ? "white" : "#000000"
                }`,
              }}
            >
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <IoIosCloseCircleOutline data-bs-dismiss="modal" />
            </div>
            <div
              className="modal-body"
              style={{
                color: props.mode === "dark" ? "white" : "#000000",
                backgroundColor: props.mode === "light" ? "white" : "#000000",
                border: `1px solid ${
                  props.mode === "dark" ? "white" : "#000000"
                }`,
              }}
            >
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control impB"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={3}
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                      backgroundColor:
                        props.mode === "light" ? "white" : "#000000",
                      border: `1px solid ${
                        props.mode === "dark" ? "white" : "#000000"
                      }`,
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control impB"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                      backgroundColor:
                        props.mode === "light" ? "white" : "#000000",
                      border: `1px solid ${
                        props.mode === "dark" ? "white" : "#000000"
                      }`,
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control newA"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    style={{
                      color: props.mode === "dark" ? "white" : "#000000",
                      backgroundColor:
                        props.mode === "light" ? "white" : "#000000",
                      border: `1px solid ${
                        props.mode === "dark" ? "white" : "#000000"
                      }`,
                    }}
                    minLength={5}
                    required
                  />
                </div>
              </form>
            </div>
            <div
              className="modal-footer row"
              style={{
                color: props.mode === "dark" ? "white" : "#000000",
                backgroundColor: props.mode === "light" ? "white" : "#000000",
                border: `1px solid ${
                  props.mode === "dark" ? "white" : "#000000"
                }`,
              }}
            >
              <div className="col">
                <button
                  ref={refClose}
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  style={{ width: "100%" }}
                >
                  Close
                </button>
              </div>
              <div className="col">
                <button
                  disabled={
                    note.etitle.length < 5 || note.edescription.length < 5
                  }
                  onClick={handleClick}
                  type="button"
                  className="btn btnUpdateNotes up"
                  style={{ width: "100%" }}
                >
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2
          className="d-flex"
          style={{
            color: props.mode === "dark" ? "white" : "#000000",
            fontSize: "xx-large",
            fontWeight: "bolder",
          }}
        >
          Your Notes:
        </h2>
        <div className="container mx-2 ok">
          {notes.length === 0 && (
            <p className="text-muted"> Your Notes will display here...</p>
          )}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              updateNote={updateNote}
              showAlert={props.showAlert}
              note={note}
              mode={props.mode}
            />
          );
        })}
      </div>
    </>
  );
};

export default DisNote;
