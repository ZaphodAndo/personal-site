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
      <GithubIcon fill={colour} />
      <TwitterIcon fill={colour} />
      <LinkedinIcon fill={colour} />
    </div>
  );
}

export default SocialLinks;
