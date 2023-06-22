import {prisma} from "@/lib/db"
import {
  Table,
  TableCaption,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { siteConfig } from "@/config/site"
import {TodoItem} from '../components/TodoItem'



function getTodos () {
  //return prisma.todo.findMany()
  return prisma.todo.findMany()
  
}

async function toggleTodo(id: string, complete: boolean) {
 "use server"
 await prisma.todo.update({where: {id}, data: {complete}})
 
}




export default async function IndexPage() {
  //const todos = await getTodos();
  const todos = await prisma.todo.findMany();

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Next v13.4 Todos <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
      </div>
      <div className="flex gap-4"> 
      <ul>
      
      {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      
      </ul>

      </div>
    </section>
  )
}
