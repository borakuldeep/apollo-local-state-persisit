
import { ReactiveVar } from "@apollo/client";
import { Todos } from "../../../models/Todos";
import {set} from 'idb-keyval';

export default function createCompleteTodo (
  todosVar: ReactiveVar<Todos>
) {
  return (id: number) => {
    const allTodos = todosVar(); 
    const compeleteTodos = allTodos.map((t) => t.id === id ? { ...t, completed: true } : t);
  
    todosVar(compeleteTodos);
    set('todos',compeleteTodos)
  }
}
