import { json, Link, LinksFunction, MetaFunction, useLoaderData } from "remix";
import HeaderBar from "~/components/HeaderBar";

import * as postA from "./posts/welcome.mdx";
import * as postB from "./posts/setting-up-git.mdx";
import * as postC from "./posts/great-arm-migration.mdx";

import styles from "../styles/thoughts.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ];
};

export const meta: MetaFunction = () => {
  return { title: "Ethan Anderson - Thoughts" };
};

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta
  };
}

export async function loader() {
  return json([postFromModule(postC), postFromModule(postB), postFromModule(postA)]);
}

export default function Thoughts() {
  const data = useLoaderData();
  return (
    <div className="fade-in">
      <HeaderBar title="My random thoughts and ideas on tech and other things." />
      {data.map((post: any) => (
        <div key={post.slug} className="post">
          <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}
