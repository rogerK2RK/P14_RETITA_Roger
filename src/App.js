import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Employees from "./pages/Employs";
import ErrorPage from "./pages/Error";

function App() {
  return (
    <Router>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </React.StrictMode>
    </Router>
  );
}

export default App;
