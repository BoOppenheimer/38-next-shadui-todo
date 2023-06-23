import {prisma} from "@/lib/db"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { revalidatePath } from "next/cache";
import {TodoItem} from '../components/TodoItem'



function getTodos () {
  //return prisma.todo.findMany()
  return prisma.todo.findMany()
  
}

async function toggleTodo(id: string, complete: boolean) {
 "use server"
 let isPending = "Pending chuck";
 console.log("this is pending?")
 console.log(isPending)
 revalidatePath("/")
 await prisma.todo.update({where: {id}, data: {complete}})
 console.log("/// - this is resolved")
 isPending = "finished Chuck"
 console.log(isPending);
 
}

async function deleteTodo(id: string) {
  "use server"
  let isPending = "Pending chuck";
  console.log("this is pending?")
  console.log(isPending)
  revalidatePath("/")
  await prisma.todo.delete({where: {id}})
  console.log("/// - this is resolved")
  isPending = "finished Chuck"
  console.log(isPending);
  
 }




export default async function IndexPage() {
  //const todos = await getTodos();
  const todos = await prisma.todo.findMany();

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex gap-4"> 

      <Table>
        <TableHeader>
            <TableRow>
                  <TableHead>
                    Complete
                  </TableHead>
                  <TableHead>
                    title
                  </TableHead>
                  <TableHead>
                    days since
                  </TableHead>
                  <TableHead>
                    delete
                  </TableHead>
            </TableRow>
        </TableHeader>
      
        <TableBody>
          {todos.map(todo => (
          
              <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          
            ))}
        </TableBody>

      </Table>
    
      </div>
    </section>
  )
}
