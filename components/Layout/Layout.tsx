import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.content}>
      <NavBar />
      {children}
    </div>
  );
}

export default Layout;
