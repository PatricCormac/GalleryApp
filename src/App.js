import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Photos } from "./components/Photos";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Photos />} />
          <Route path="/upload" element={<Form />} />
          <Route path="/admin" element={<div>admin</div>} />
          <Route path="/user" element={<div>user</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
