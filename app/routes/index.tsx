import type { LinksFunction, MetaFunction } from "remix";
import HeaderBar from "~/components/HeaderBar";

import indexStylesUrl from "../styles/index.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: indexStylesUrl,
    },
  ];
};

export const meta: MetaFunction = () => {
  return { title: "Ethan Anderson - Home" };
};

export default function Index() {
  return (
    <div className="fade-in">
      <HeaderBar
        title="A frontend developer with an interest in design, specialising in web
        technology"
      />
      <p>
        Hi I’m Ethan an apprentice applications developer at PebblePad. My
        preferred area is frontend web development however I am also interested
        in exploring building UI for mobile and desktop experiences.
      </p>
      <p>
        When not working I’m either scrolling through twitter or smashing out
        dev work for LinqEm an elegant link aggregation repository for the web.
      </p>
      <div className="project-list">
        <h2>Projects</h2>
        <hr />
        <a href="https://linqem.com" target="_blank" rel="noopener noreferrer">
          LinqEm
        </a>
        <p>An elegant link aggregation repository for the web.</p>
        <a
          href="https://github.com/LinqEm/ProjectFanta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project Fanta
        </a>
        <p>
          An instant and simple platform for anybody who wants to broadcast
          messages to subscribers using SMS!
        </p>
      </div>
    </div>
  );
}
