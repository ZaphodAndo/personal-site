import React from "react";
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
        <a href={link}>
          View Code <RightArrowIcon className={styles.icon} />
        </a>
      </div>
      {image ? <img src={image} alt={imageAlt} width="288" height="88"></img> : null}
    </div>
  );
}

export default ProjectCard;
