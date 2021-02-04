import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>Ethan Anderson</p>
      <SocialLinks colour="#828282" />
    </div>
  );
}

export default Footer;
