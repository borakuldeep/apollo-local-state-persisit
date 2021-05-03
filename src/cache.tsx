
import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import { get } from 'idb-keyval';
import { Todos } from "./models/Todos";
import { VisibilityFilter, VisibilityFilters } from "./models/VisibilityFilter";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read () {
            (async () => {
              const todosFromIdb = await get('todos') || [];
              todosVar(todosFromIdb);
            })();
            return todosVar();
          }
        },
        visibilityFilter: {
          read () {
            return visibilityFilterVar();
          },
        }
      }
    }
  }
});


export const todosVar: ReactiveVar<Todos> = makeVar<Todos>(
  []
);

export const visibilityFilterVar = makeVar<VisibilityFilter>(
  VisibilityFilters.SHOW_ALL
)
