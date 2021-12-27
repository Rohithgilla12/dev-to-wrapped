import {
  ActionFunction,
  Form,
  Outlet,
  redirect,
  useActionData,
  useTransition,
} from "remix";
import { cookie } from "~/utils/cookie.server";

type ActionData = {
  formError?: string;
  fieldErrors?: { apiKey: string | undefined };
  fields?: {
    apiKey: string;
  };
};

export const action: ActionFunction = async ({ request }) => {
  const { apiKey } = Object.fromEntries(await request.formData());

  if (typeof apiKey !== "string") {
    throw new Error(`Please check the API key and form`);
  }

  const cookieHeader = await cookie.serialize({ apiKey });

  return redirect("/app", {
    headers: {
      "Set-Cookie": cookieHeader,
    },
  });
};

export default function Index() {
  const actionData = useActionData<ActionData>();
  const transition = useTransition();

  return (
    <div className="center">
      <div className="text-lg underline text-center my-2 decoration-pink-500 decoration-2">
        Dev Wrapped Get your stats wrapped up for 2021 on the dev.to platform
      </div>
      <Form className="form flex flex-row justify-center my-8" method="post">
        <div>
          <label>
            <span className="px-4">API Key:</span>
            <input
              className="form-input px-4 w-64 h-8 rounded-lg border-solid border-sky-500"
              type="text"
              name="apiKey"
            />
          </label>
        </div>
        <button
          type="submit"
          className="button shadow-lg w-48 px-8 mx-8 text-white shadow-black/50 bg-black rounded-lg"
        >
          Get Stats
        </button>
      </Form>

      <div className="flex flex-row gap-8 my-8">
        <div className="rounded-2xl p-2 w-2/3 justify-center flex flex-col">
          <img
            className="rounded-xl border-2 border-solid border-sky-500 center mx-auto"
            src="https://res.cloudinary.com/rohith-gilla/image/upload/v1640586061/Blog/Screenshot_2021-12-27_at_11.50.54_AM_ngybxi.png"
          />
        </div>
        <div className="w-1/3 prose ">
          <p>
            Dev API currently doesn't support oauth logins, so you have to
            manually enter the api key here. But don't worry, the API key is
            stored only in your browser cookies securely. To get your API key
            follow the steps 👇🏼
          </p>
          <ul>
            <li>
              Go to your dev.to profile page and click on the <b>Settings</b>
              page and click on account, or use this{" "}
              <a
                href="https://dev.to/settings/account"
                className="underline text-sky-500 decoration-sky-500 hover:text-sky-500 visited:text-sky-600"
              >
                link
              </a>
            </li>
            <li>
              Scroll a bit, you will see <b>DEV Community API Keys</b> section,
              write your own description and generate API Key.
            </li>
            <li>
              The page will reload, then navigate back to the section, you will
              see the toggle on your api key description, click on it and you
              will see your API key.
            </li>

            <li>
              Once you have the API key, paste it in the above text field that
              you see and click on <b>Get Stats</b> button and view your stats
              🥳
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
