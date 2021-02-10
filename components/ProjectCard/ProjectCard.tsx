import { motion } from "framer-motion";
import RightArrowIcon from "../Icons/RightArrowIcon";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  header: string;
  desc: string;
  link: string;
  image?: string;
  imageAlt?: string;
};

function ProjectCard({ header, desc, link, image, imageAlt }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <div>
        <h2>{header}</h2>
        <p>{desc}</p>
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          initial="idle"
          whileHover="hover"
          whileFocus="hover"
        >
          View Code <RightArrowIcon className={styles.icon} />
        </motion.a>
      </div>
      {image ? <img src={image} alt={imageAlt} width="288" height="88"></img> : null}
    </div>
  );
}

export default ProjectCard;
