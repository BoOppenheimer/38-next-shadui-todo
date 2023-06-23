
import { prisma } from "@/lib/db"
import { redirect } from "next/navigation"
import Link from "next/link"

import AddButton from './AddButton';
import { revalidatePath } from "next/cache";

async function createTodo(data: FormData) {
  "use server"

  const title = data.get("title")?.valueOf()
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title")
  }
  console.log("this is DATA: " + data);
  await prisma.todo.create({ data: { title, complete: false } })
  revalidatePath("/")
  redirect("/")
}

export default function Page() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">

    
      <form action={createTodo} className="flex flex-col gap-2">
        <input
          type="text"
          name="title"
          required
          className="rounded border border-slate-300 bg-transparent px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex justify-end gap-1">
          <Link
            href=".."
            className="rounded border border-slate-300 px-2 py-1 text-slate-300 outline-none focus-within:bg-slate-700 hover:bg-slate-700"
          >
            Cancel
          </Link>
          <AddButton/>
           
        </div>
      </form>
    </section>
  )
}

