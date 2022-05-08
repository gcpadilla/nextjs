import React from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import styles from "../css/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={`container-fluid ${styles.bordernav}`}>
      <div className="row">
        <div className="col-sm d-flex flex-nowrap align-items-center">
          <FiMenu style={{ fontSize: "25px" }} />
          <div className="ml-1 mr-3">MENÚ</div>
          <div
            className={`input-group input-group-sm mb-3 ${styles.myinput}`}
          >
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                <FiSearch />
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm d-flex flex-nowrap align-items-center justify-content-center">
          <p className="h1 text-info">LA NACION</p>
        </div>
        <div className="col-sm d-flex flex-nowrap align-items-center justify-content-end">
        <button type="button" className="btn btn-warning mr-4" style={{width: "120px"}}>SUSCRIBETE</button>
        <button type="button" className="btn btn-outline-info" style={{width: "120px"}}>INGRESAR</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
