import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

import styles from "./tailwind.css";

export const meta: MetaFunction = () => {
  return {
    title: "Dev.to Wrapped 2021",
    description: "Dev.to Wrapped 2021",
    keywords: "Dev.to Wrapped 2021",

    "og:url": "https://devto-wrapped.netlify.app/",
    "og:image":
      "https://res.cloudinary.com/rohith-gilla/image/upload/w_512,h_300,c_fill/v1640586061/Blog/Screenshot_2021-12-27_at_11.50.54_AM_ngybxi.png",
    "og:title": "Dev.to Wrapped 2021",
    "twitter:image":
      "https://res.cloudinary.com/rohith-gilla/image/upload/w_512,h_300,c_fill/v1640586061/Blog/Screenshot_2021-12-27_at_11.50.54_AM_ngybxi.png",
    "twitter:url": "https://devto-wrapped.netlify.app/",
  };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-lime-50 px-16 py-4 mx-16 my-4 text-black ">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
