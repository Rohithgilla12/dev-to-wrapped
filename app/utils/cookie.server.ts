import { createCookie } from "remix";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

export const cookie = createCookie("devto-wrapped-session", {
  // normally you want this to be `secure: true`
  // but that doesn't work on localhost for Safari
  // https://web.dev/when-to-use-local-https/
  secure: process.env.NODE_ENV === "production",
  secrets: [sessionSecret],
  sameSite: "lax",
  maxAge: 60 * 60 * 24 * 30,
  httpOnly: true,
});
