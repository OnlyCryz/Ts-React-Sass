import React from "react";
import styles from "./App.module.scss";
import Navbar from "./navigation/Navbar";
import Home from "./view/home/Home";
import Faculties from "./view/faculties/Faculties";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faculties" element={<Faculties />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
