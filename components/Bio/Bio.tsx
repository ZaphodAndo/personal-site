import React from "react";
import { BlueBlob } from "../Blobs/Blobs";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./Bio.module.css";

function Bio() {
  return (
    <div className={styles.bio}>
      <img className={styles.pic} src="/images/profile-pic.png" height="88" width="88" />
      <BlueBlob className={styles.blob} />
      <h1>
        Hi, i'm <span>Ethan.</span>
      </h1>
      <p>
        Destroyer of Builds, Remover of Strings, Creator of lint errors. Currently an application developer @
        <a className={styles.link} href="https://www.pebblepad.co.uk/" target="_blank" rel="noopener noreferrer">
          PebblePad
        </a>
      </p>
      <SocialLinks colour="#FFF" />
    </div>
  );
}

export default Bio;
