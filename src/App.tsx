import React from "react";
import styles from "./App.module.scss";
import Navbar from "./navigation/Navbar";
import Home from "./view/home/Home";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
