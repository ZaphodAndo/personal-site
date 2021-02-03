import Bio from "../components/Bio/Bio";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
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
    </div>
  );
}

export default Home;
