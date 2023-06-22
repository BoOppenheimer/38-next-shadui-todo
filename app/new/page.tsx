
import { prisma } from "@/lib/db"
import { redirect } from "next/navigation"
import Link from "next/link"
import  AddButton  from "./addbutton"

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { revalidatePath } from "next/cache";

async function createTodo(data: FormData) {
  "use server"

  const title = data.get("title")?.valueOf()
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title")
  }

  await prisma.todo.create({ data: { title, complete: false } })
  revalidatePath("/")
  redirect("/")
}

export default function Page() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">

    
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          required
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <AddButton/>
           
        </div>
      </form>
    </section>
  )
}