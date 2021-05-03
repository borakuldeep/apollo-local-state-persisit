
import { ReactiveVar } from "@apollo/client";
import { Todos } from "../../../models/Todos";
import {set} from 'idb-keyval';

export default function createClearCompletedTodos (
  todosVar: ReactiveVar<Todos>
) {
  return () => {
    const nonCompletedTodos = todosVar()
      .filter((t) => t.completed !== true);
  
    todosVar(nonCompletedTodos);
    set('todos', nonCompletedTodos);
  
  }
} 