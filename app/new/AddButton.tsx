"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function AddButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none disabled:text-slate-700"
    >
      Add Todo
    </button>
  );
}