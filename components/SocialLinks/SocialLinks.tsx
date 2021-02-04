import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import styles from "./SocialLinks.module.css";

type SocialLinksProps = {
  colour: string;
};

function SocialLinks({ colour }: SocialLinksProps) {
  return (
    <div className={styles.icons}>
      <a href="https://github.com/ZaphodAndo" target="_blank" rel="noopener noreferrer">
        <GithubIcon fill={colour} />
      </a>
      <a href="https://twitter.com/ethan_ando" target="_blank" rel="noopener noreferrer">
        <TwitterIcon fill={colour} />
      </a>
      <a href="https://www.linkedin.com/in/ethan-anderson-41ba9a172/" target="_blank" rel="noopener noreferrer">
        <LinkedinIcon fill={colour} />
      </a>
    </div>
  );
}

export default SocialLinks;
