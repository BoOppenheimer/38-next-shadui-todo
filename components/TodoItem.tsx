"use client"

import {
  TableCell,
  TableRow,
} from "@/components/ui/table"
import {Button} from "./ui/button"
import {Trash2} from "lucide-react" 
import { experimental_useFormStatus as useFormStatus } from "react-dom"




const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;

function handlerDelete () {
  console.log("hi delete!")
}

type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
  deleteTodo: (id: string) => void
}



export function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {
 
    const { pending } = useFormStatus();
  

  return (
    <TableRow>

          <TableCell className="font-medium ">
              <input 
              type="checkbox" 
              id={id} 
              defaultChecked={complete}
              onChange={e=> toggleTodo(id, e.target.checked)}
              className="peer cursor-pointer"/ >
              <label htmlFor="id" className="cursor-pointer peer-checked:text-slate-500 peer-checked:line-through">will be x'd</label>
          </TableCell>

          <TableCell className="cursor-pointer peer-checked:text-slate-500 peer-checked:line-through">
              {title}
          </TableCell>

          <TableCell>
            date
          </TableCell>

          <TableCell className="text-right">
              <Button variant="outline" onClick={()=> deleteTodo(id)} className="p-1"> <Trash2/></Button>
              
              
                
              
         </TableCell>

    </TableRow>
  )
}

