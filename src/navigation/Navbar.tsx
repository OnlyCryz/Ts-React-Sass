import * as React from "react";
import styles from "./Navigation.module.scss";

interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
  return (
    <nav
      className={styles.navbar + " navbar navbar-expand-lg"}
    >
      <div className={styles.navbarContainer + " container"}>
        <a className={styles.navbarLogo + " navbar-brand"} href="/">
          <img
            src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt="bootstrap"
            width="30"
            height="27"
            className="d-inline-block align-text-top"
          />
          Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
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
              Menu Offcanvas
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
                <a className="nav-link" aria-current="page" href="/">
                  Premium
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Ayuda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Descargar
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
