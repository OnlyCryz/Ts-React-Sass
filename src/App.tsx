import React from "react";
import styles from "./App.module.scss";
import BottomNavbar from "./navigation/BottomNavbar";
import Navbar from "./navigation/Navbar";
import Sidebar from "./navigation/Sidebar";
import Home from "./view/home/Home";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Home />
      <BottomNavbar />
      <Sidebar />
    </div>
  );
}

export default App;
