import { LinksFunction, Outlet } from "remix";

import styles from "../styles/posts.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ];
};

export default function PostRoute() {
  return (
    <div className="post-page fade-in">
      <Outlet />
    </div>
  );
}
