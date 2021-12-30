import * as React from "react";
import styles from "./Navigation.module.scss";

interface SidebarProps {}

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  return (
    <div className={styles.sidebar}>
      <h1>Sidebar</h1>
    </div>
  );
};

export default Sidebar;
