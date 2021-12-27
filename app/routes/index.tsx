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
      {/* <h1 className="text-2xl text-sky-400">Welcome to Dev.to wrapped</h1> */}
      <Form className="form flex flex-row justify-center my-8" method="post">
        <div>
          <label>
            API Key:{" "}
            <input
              className="form-input px-4 w-64 h-8 rounded-lg border-solid border-sky-500"
              type="text"
              name="apiKey"
            />
          </label>
        </div>
        <button
          type="submit"
          className="button shadow-lg w-32 px-8 mx-8 text-white shadow-black/50 bg-black rounded-lg"
        >
          Add
        </button>
      </Form>
      <div className="rounded-2xl p-2 bg-sky-300">
        <img
          className="h-1/4 rounded-xl border-solid mx-auto"
          src="https://res.cloudinary.com/rohith-gilla/image/upload/v1640586061/Blog/Screenshot_2021-12-27_at_11.50.54_AM_ngybxi.png"
        ></img>
      </div>

      <Outlet />
    </div>
  );
}
