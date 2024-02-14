import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Notes from "./components/Notes";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000000";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <NoteState>
        <Router>
          <Navbar toggleMode={toggleMode} mode={mode} />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={<Home showAlert={showAlert} mode={mode} />}
              />
              <Route exact path="/about" element={<About mode={mode} />} />
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} mode={mode} />}
              />
              <Route
                exact
                path="/signup"
                element={<Signup showAlert={showAlert} mode={mode} />}
              />
              <Route
                exact
                path="/createNote"
                element={<Notes showAlert={showAlert} mode={mode} />}
              />
              <Route exact path="/*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer mode={mode} />
        </Router>
      </NoteState>
    </>
  );
}

export default App;
