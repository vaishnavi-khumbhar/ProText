import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = "#f8fafc"; 
      document.title = "TextUtils - Light Mode";
    } else {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = "#0f172a"; 
      document.title = "TextUtils - Dark Mode";
    }
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container flex-grow-1 my-4">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={
              <TextForm 
                showAlert={showAlert} 
                heading="Try ProText - Professional text tools." 
                mode={mode} 
              />
            }/> 
          </Routes>
        </div>
           
           <footer 
  className="text-center py-3 mt-auto"
  style={{
    backgroundColor: mode === "dark" ? "#1e293b" : "#f1f5f9",
    color: mode === "dark" ? "#e2e8f0" : "#1e293b",
    borderTop: mode === "dark" ? "1px solid #334155" : "1px solid #cbd5e1"
  }}>
  <p className="mb-1">
    © {new Date().getFullYear()} <b>ProText</b>. All rights reserved.
  </p>
  <small>
    Thanks For
    <span role="img" aria-label="love"> ❤️ </span> 
    Visiting.
  </small>
</footer>

      
      </div>
    </Router>
  );
}

export default App;
