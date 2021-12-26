import { Outlet } from "remix";

export default function Index() {
  return (
    <div className="text-slate-200">
      <h1 className="text-2xl text-sky-400">Welcome to Dev.to wrapped</h1>
      <Outlet />
    </div>
  );
}
