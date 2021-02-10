import Link from "next/link";
import { motion } from "framer-motion";
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
          <motion.div
            className={styles.card}
            tabIndex={0}
            initial="rest"
            whileHover="hover"
            whileFocus="hover"
            whileTap="hover"
            variants={{ hover: { scale: 1.1 }, rest: { scale: 1 } }}
            transition={{ duration: 0.2 }}
          >
            <p className={styles.header}>{post.data.title}</p>
            <p className={styles.desc}>{post.data.description}</p>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default TimeLinePost;
