import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { photosApi } from "./api";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Photos } from "./components/Photos";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    photosApi.getPhotos().then((data) => {
      if (data) {
        setPhotos(data);
      }
    });
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Photos photos={photos} />} />
          <Route path="/upload" element={<Form />} />
          <Route path="/admin" element={<div>admin</div>} />
          <Route path="/user" element={<div>user</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
