
import Link from "next/link"
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


// const todos = [
//   {
//     id: "1",
//     title: "task 1",
//     completed: false,
//     createdAt: 1687168190522,
//     updatedAt: 1687168190523
//   },
//   {
//     id: "2",
//     title: "task 2",
//     completed: false,
//     createdAt: 1687168190522,
//     updatedAt: 1687168190523
//   }
 
// ];

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
          Next v13.4 Todo's <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
      </div>
      <div className="flex gap-4"> 
      <ul>
      
      {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      
      </ul>

       {/* 
     
     <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Completed</TableHead>
          <TableHead>Todo</TableHead>
          <TableHead>Days Since</TableHead>
          <TableHead className="text-right">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {todos.map(todo =>(
        //<li key={todo.id}>{todo.title} </li> 
        <TableRow>
              
         </TableRow>
        // <>
            
        //     <TodoItem key={todo.id} id={todo.id} title={todo.title} complete={todo.complete} createdAt toggleTodo={toggleTodo}/> 
        // </>
       
))}
       
      </TableBody>
      </Table> */}
      </div>
    </section>
  )
}
