import { Link, LinksFunction, LoaderFunction, useLoaderData } from "remix";
import HeaderBar from "~/components/HeaderBar";
import { db } from "~/utils/db.server";

import thoughtsStylesUrl from "../styles/thoughts.css";

type Post = {
  id: number;
  createdAt: Date;
  description: string;
  title: string;
};

type LoaderData = {
  postListItems: Array<Post>;
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: thoughtsStylesUrl,
    },
  ];
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    postListItems: await db.post.findMany({
      select: { id: true, title: true, description: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    }),
  };
  return data;
};

export default function Thoughts() {
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <HeaderBar title="My random thoughts and ideas on tech and other things." />
      {data.postListItems.map((post) => (
        <div key={post.id} className="post">
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
          <p>{post.description}</p>
        </div>
      ))}
      <Link to="/"></Link>
    </div>
  );
}
