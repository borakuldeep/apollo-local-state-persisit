
import { Todo, Todos } from "../../../models/Todos";
import { ReactiveVar } from "@apollo/client";
import {set} from 'idb-keyval';

export default function deleteTodo (todosVar: ReactiveVar<Todos>) {
  return (id: number) => {
    const allTodos = todosVar();
    const filteredTodos = allTodos.filter((todo: Todo) => todo.id !== id);
    todosVar(filteredTodos);
    set('todos', filteredTodos);
  }
}
