import Link from "next/link";
import styles from "./TimeLinePost.module.css";

function TimeLinePost({ post }) {
  return (
    <div>
      <Link as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`} href="/posts/[slug]">
        {post.data.title}
      </Link>
    </div>
  );
}

export default TimeLinePost;
