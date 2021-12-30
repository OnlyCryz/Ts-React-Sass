import * as React from "react";
import styles from "./Navigation.module.scss";

interface BottomNavbarProps {}

const BottomNavbar: React.FunctionComponent<BottomNavbarProps> = () => {
  return (
    <div className={styles.bottomNavbar}>
      <h1>BottomNavbar</h1>
    </div>
  );
};

export default BottomNavbar;
