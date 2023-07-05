import { TodoState, todoReducer } from "../reducers/todo.reducer"

export interface IStore {
  todoReducer: TodoState
}


export const StoreObject = {
  todoReducer : todoReducer
}
