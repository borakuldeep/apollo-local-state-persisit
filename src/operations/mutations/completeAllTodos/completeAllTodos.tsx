
import { Todo, Todos } from "../../../models/Todos";
import { ReactiveVar } from "@apollo/client";
import {set} from 'idb-keyval';

export default function completeAllTodos (
  todosVar: ReactiveVar<Todos>
) {
  return () => {
    const allTodosCompleted = todosVar()
      .map((t: Todo) => ({ ...t, completed: true }));
      
    todosVar(allTodosCompleted);
    set('todos',allTodosCompleted);
  }
}