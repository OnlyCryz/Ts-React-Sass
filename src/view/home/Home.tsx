import * as React from "react";
import styles from "./Home.module.scss";

//import swal from 'sweetalert';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <div className={styles.home + " container mt-2"}>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
