import { LinksFunction, LoaderFunction, useLoaderData } from "remix";
import { marked } from "marked";
import HeaderBar from "~/components/HeaderBar";
import { db } from "~/utils/db.server";

import postStylesUrl from "~/styles/posts.css";

type Post = {
  id: number;
  description: string;
  title: string;
  content: string;
};

type LoaderData = { post: Post };

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: postStylesUrl,
    },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.postId) throw new Error("No postId provided");
  const postId = parseInt(params.postId);

  const post = await db.post.findUnique({
    where: { id: postId },
    select: { id: true, title: true, description: true, content: true },
  });

  if (!post) throw new Error("Post not found");
  let data: LoaderData = { post };

  const cleanedContent = data.post.content.replace(/\\n/g, "\n");
  data.post.content = marked.parse(cleanedContent);
  return data;
};

export default function PostRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <div className="post-page">
      <HeaderBar title={data.post.title} />
      <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
    </div>
  );
}
