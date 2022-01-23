import * as React from "react";
import styles from "../Faculties.module.scss";

//import swal from 'sweetalert';

interface CampusProps {}

const Campus: React.FunctionComponent<CampusProps> = () => {
  const campus = ["Todas", "Santiago", "Concepcion", "Temuco"];
  return (
    <div className={styles.campus}>
      <div className="row">
        <div className={styles.campusTittle + " col-md-3"}>
            <div>Elige una Sede</div>
        </div>
        <div className={styles.campusCities + " col-md-9"}>
          {campus.map((item) => {
            return <div className={styles.campusCity +" col-6 col-md-4 col-lg-3"}>
                <div className={styles.campusCityItem}>{item}</div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Campus;
