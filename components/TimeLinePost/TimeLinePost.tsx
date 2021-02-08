import Link from "next/link";
import PostIcon from "../Icons/PostIcon";
import styles from "./TimeLinePost.module.css";

function TimeLinePost({ post }) {
  return (
    <div className={styles.post}>
      <div className={styles.side}>
        <div className={styles.icon}>
          <PostIcon />
        </div>
        <div className={styles.divider} />
      </div>
      <div className={styles.content}>
        <p className={styles.info}>New Post - {post.data.date}</p>
        <Link as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`} href="/posts/[slug]">
          <div className={styles.card}>
            <p className={styles.header}>{post.data.title}</p>
            <p className={styles.desc}>{post.data.description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TimeLinePost;
