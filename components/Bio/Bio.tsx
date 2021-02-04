import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./Bio.module.css";

function Bio() {
  return (
    <div className={styles.bio}>
      <h1>
        Hi, i'm <span>Ethan.</span>
      </h1>
      <p>
        Destroyer of Builds, Remover of Strings, Creator of lint errors. Currently an application developer @
        <a href="https://www.pebblepad.co.uk/">PebblePad</a>
      </p>
      <SocialLinks colour="#FFF" />
    </div>
  );
}

export default Bio;
