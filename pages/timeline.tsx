import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import TimeLinePost from "../components/TimeLinePost/TimeLinePost";
import styles from "../styles/Timeline.module.css";

export default function Timeline({ posts }) {
  let sections = [];
  posts.forEach((post) => {
    if (!sections.includes(post.data.section)) {
      sections.push(post.data.section);
    }
  });

  return (
    <>
      <Head>
        <title>Timeline</title>
        <meta
          name="description"
          content="Ethan is an apprentice applications developer at a company called PebblePad."
        />
      </Head>
      <div className={styles.desc}>
        A <span className={styles.highlight}>timeline</span> featuring all of my blog posts on this site as well as
        achievements, projects and whatever else I want to pad this out with.
      </div>
      {sections.map((date, key) => (
        <div className={styles.section} key={key}>
          <div className={styles.header}>
            <h2>{date}</h2>
            <div className={styles.divider1}></div>
          </div>
          {posts.map((post, key) => (post.data.section === date ? <TimeLinePost key={key} post={post} /> : null))}
        </div>
      ))}
    </>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath
    };
  });

  return { props: { posts } };
}
