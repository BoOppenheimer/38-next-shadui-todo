"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function AddButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="rounded border border-slate-300 px-2 py-1 text-slate-300 outline-none focus-within:bg-slate-700 hover:bg-slate-700 disabled:text-slate-700"
    >
      Add Todo
    </button>
  );
}