import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-md-4 mt-2 mb-2">
      {" "}
      {/* Adjust the column size for responsiveness */}
      <div
        className="card m-2"
        style={{
          minWidth: "200px",
          color: props.mode === "dark" ? "white" : "#000000",
          backgroundColor: props.mode === "light" ? "white" : "#000000",
          border: `1px solid ${props.mode === "dark" ? "white" : "#000000"}`,
        }}
      >
        {/* Adjust the maximum width */}
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5
              className="card-title"
              style={{ fontWeight: "bolder", fontSize: "x-large" }}
            >
              {note.title}
            </h5>
            <div className="ms-auto">
              <MdDelete
                style={{ height: "35px", marginRight: "5px" }}
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Deleted Successfully", "success");
                }}
              />
              <CiEdit
                style={{ height: "35px" }}
                onClick={() => {
                  updateNote(note);
                }}
              />
            </div>
          </div>
          <p className="card-text tag-class">{note.tag}</p>
          <p className="card-text dis-class">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
