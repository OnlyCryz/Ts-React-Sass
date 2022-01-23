import * as React from "react";
import styles from "./Navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
  return (
    <nav
      className={
        styles.navbar + " navbar navbar-expand-lg navbar-light bg-light"
      }
    >
      <div className={styles.navbarContainer + " container"}>
        <a className={styles.navbarLogo + " navbar-brand ml-3"} href="/">
          Universidad Test
        </a>
        <button
          className={styles.navbarToggler + " navbar-toggler"}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          className={styles.offcanvas + " offcanvas offcanvas-end"}
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className={styles.offcanvasHeader + " offcanvas-header"}>
            <h5
              className={styles.offcanvasTittle + " offcanvas-title"}
              id="offcanvasNavbarLabel"
            >
              Cristobal@Test.cl
            </h5>
            <button
              type="button"
              className={styles.offcanvasClose + " btn-close text-reset"}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className={styles.offcanvasBody + " offcanvas-body"}>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/faculties">
                  Facultades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Cursos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Perfil
                </a>
              </li>
              <li className={styles.separator}></li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Registrarse
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Iniciar sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
