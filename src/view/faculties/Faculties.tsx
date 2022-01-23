import * as React from "react";
import Campus from "./components/Campus";
import styles from "./Faculties.module.scss";

//import swal from 'sweetalert';

interface FacultiesProps {}

const Faculties: React.FunctionComponent<FacultiesProps> = () => {
  return (
    <div className={styles.faculties + " container mt-2"}>
      <Campus></Campus>
      <h1>Facultades</h1>
    </div>
  );
};

export default Faculties;
