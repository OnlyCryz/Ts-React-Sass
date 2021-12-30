import * as React from "react";
import styles from "./Home.module.scss";
import swal from 'sweetalert';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {

    const alert = () => {
        return swal("Good job!", "You clicked the button!", "success");
    }
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <button onClick={alert} type="button" className="btn btn-primary">Alerta test</button>
    </div>
  );
};


export default Home;
