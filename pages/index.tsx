import { GreenBlob, LightBlueBlob, LightPurpleBlob, PurpleBlob, YellowBlob } from "../components/Blobs/Blobs";
import Bio from "../components/Bio/Bio";
import RightArrowIcon from "../components/Icons/RightArrowIcon";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <PurpleBlob className={styles.blob1} />
      <GreenBlob className={styles.blob2} />
      <YellowBlob className={styles.blob3} />
      <LightBlueBlob className={styles.blob4} />
      <LightPurpleBlob className={styles.blob5} />
      <Bio />
      <div className={styles.desc}>
        <p className={styles.content}>
          I’m an apprentice applications developer at a company called PebblePad. My preferred area is frontend web
          development however I am currently learning swift to get into iOS development.
        </p>
        <p className={styles.content}>
          When not working I’m either scrolling through twitter or smashing out dev work for LinqEm an elegant link
          aggregation repository for web.
        </p>
      </div>
      <div className={styles.projects}>
        <ProjectCard
          header="Project Fanta"
          desc="An instant and simple platform for anybody who wants to broadcast messages to subscribers using SMS!"
          link="https://github.com/LinqEm/ProjectFanta"
          image="/images/FantaLogo.png"
          imageAlt="The logo for Project Fanta"
        />
        <ProjectCard
          header="ScribeJS"
          desc="A package that generates randomised sentences by providing datasets of values and specifying which parts of a sentence you wish to randomise."
          link="https://github.com/ZaphodAndo/scribejs"
        />
        <a href="https://github.com/ZaphodAndo?tab=repositories" target="_blank" rel="noopener noreferrer">
          View More <RightArrowIcon className={styles.icon} />
        </a>
      </div>
      <div className={styles.info}>
        <div className={styles.main}>
          <h2>Skills</h2>
          <p>These are the technologies that I have worked with and I am most comfortable with:</p>
          <div className={styles.mainList}>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <ul>
              <li>React</li>
              <li>Git</li>
              <li>NodeJS</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
        <div className={styles.main + " " + styles.what}>
          <h2>What I'm doing</h2>
          <p>
            Im currently helping to improve and enhance our platform at PebblePad in an effort to meet our goal of
            creating beautifully crafted software.
          </p>
          <p>In my spare time I am also working on developing LinqEm an elegant link aggregation repository for web.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
