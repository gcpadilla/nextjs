import React from "react";
import styles from "../css/Banner.module.css";
import SidebarAside from "./SidebarAside";

const Banner = () => {
  return (
    <>
      <div className={`${styles.banner}`}>
        <div className={`${styles.desktop}`}></div>
      </div>
      <div className={`d-sm-none ${styles.aside}`}>
         <SidebarAside />
      </div>
    </>
  );
};

export default Banner;
