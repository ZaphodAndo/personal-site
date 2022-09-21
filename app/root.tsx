import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";
import type { MetaFunction, LinksFunction } from "remix";

import globalStylesUrl from "./styles/global.css";
import rootStylesUrl from "./styles/root.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStylesUrl
    },
    {
      rel: "stylesheet",
      href: rootStylesUrl
    }
  ];
};

export const meta: MetaFunction = () => {
  return {
    title: "Ethan Anderson",
    description: "Ethan is an apprentice applications developer at a company called PebblePad."
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
