import React from "react";
import { motion } from "framer-motion";
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
      <motion.a
        href="https://github.com/ZaphodAndo"
        target="_blank"
        rel="noopener noreferrer"
        initial="idle"
        variants={{ idle: { rotate: 0 }, hover: { rotate: -20 } }}
        whileHover="hover"
        whileFocus="hover"
      >
        <GithubIcon fill={colour} />
      </motion.a>
      <motion.a
        href="https://twitter.com/ethan_ando"
        target="_blank"
        rel="noopener noreferrer"
        initial="idle"
        variants={{ idle: { rotate: 0 }, hover: { rotate: -20 } }}
        whileHover="hover"
        whileFocus="hover"
      >
        <TwitterIcon fill={colour} />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/ethan-anderson-41ba9a172/"
        target="_blank"
        rel="noopener noreferrer"
        initial="idle"
        variants={{ idle: { rotate: 0 }, hover: { rotate: -20 } }}
        whileHover="hover"
        whileFocus="hover"
      >
        <LinkedinIcon fill={colour} />
      </motion.a>
    </div>
  );
}

export default SocialLinks;
