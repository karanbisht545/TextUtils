import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

let name = "karan bisht";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabled", "success");
      document.title = "TextUtils -Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils -Light Mode";
    }
  };
  return (
   
    <BrowserRouter>
    <Navbar title="TextUtils2h" mode={mode} toggleMode={toggleMode} />
      {/* <ScrollToTop /> */}

      <Routes>

        <Route
          path="/"
          element={
            <TextForm
              showAlert={showAlert}
              heading="enter the text to analize"
              mode={mode}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
