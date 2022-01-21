import type { LinksFunction, MetaFunction } from "remix";
import HeaderBar from "~/components/HeaderBar";

import nowStylesUrl from "../styles/now.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: nowStylesUrl,
    },
  ];
};

export const meta: MetaFunction = () => {
  return { title: "Ethan Anderson - Now" };
};

export default function Thoughts() {
  return (
    <div className="now-page fade-in">
      <HeaderBar title="What im doing now" />
      <ul>
        <li>
          Currently helping to improve and enhance our platform at PebblePad in
          an effort to meet our goal of creating beautifully crafted software
        </li>
        <li>
          Collaborating with{" "}
          <a
            href="https://github.com/kana-ki"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kana Ki
          </a>
          ,{" "}
          <a
            href="https://github.com/johnmason27"
            target="_blank"
            rel="noopener noreferrer"
          >
            John Mason
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/SylvanB"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sylvan B
          </a>{" "}
          on LinqEm
        </li>
        <li>Working towards completing my apprenticship</li>
        <li>Trying to read more books</li>
        <li>Working on various side projects</li>
      </ul>
      <p>Last updated on the 20th Janurary 2022</p>
    </div>
  );
}
