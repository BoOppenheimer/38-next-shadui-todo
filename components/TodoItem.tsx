"use client"

import {
  TableCell,
  TableRow,
} from "@/components/ui/table"
import {Button} from "./ui/button"


// type TodoItemProps = {
//   id: string
//   title: string
//   complete: boolean
//   createdAt: number
//   updatedAt: number
//   toggleTodo: (id: string, complete: boolean) => void
// };

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
}

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {


  return (

    <li className="flex gap-1 items-center">
    <input
      id={id}
      type="checkbox"
      className="cursor-pointer peer"
      defaultChecked={complete}
      onChange={e => toggleTodo(id, e.target.checked)}
    />
    <label
      htmlFor={id}
      className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
    >
      {title}
    </label>
  </li>
    // <TableRow>
    //       <TableCell className="font-medium ">
    //       <input 
    //       type="checkbox" 
    //       id={id} 
    //       defaultChecked={complete}
    //       onChange={e=> toggleTodo(id, e.target.checked)}
    //       className="cursor-pointer peer"/ >
    //       <label htmlFor="id" className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">will be x'd</label>
    //       </TableCell>
    //       <TableCell>{title}</TableCell>
    //       <TableCell></TableCell>
    //       <TableCell className="text-right"><Button/></TableCell>
    // </TableRow>
  )
}
