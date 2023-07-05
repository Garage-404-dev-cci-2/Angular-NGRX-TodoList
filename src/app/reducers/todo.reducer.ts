import { createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { addTodo, deleteTodo, initTodos, updateTodo } from "../actions/todo.action";
import { Action } from "rxjs/internal/scheduler/Action";




export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
    todos: [
      {
        id: 1,
        title: 'Todo 1',
        content: 'Todo 1 content',
        isCompleted: false
      },
      {
        id: 2,
        title: 'Todo 2',
        content: 'Todo 2 content',
        isCompleted: false
      },
    ]
}


export const todoReducer = createReducer(
  initialState,
  on(initTodos, (state, { todos }) => {
    let newState = {
      ...state,
      todos: todos
      }
      console.log('Nouvelle version du state', newState);
      return newState
  }),
  on(addTodo, (state, { todo }) => {
    let newState = {
      ...state,
      todos: state.todos.concat([todo])
    }
    console.log('Nouvelle version du state', newState);

    return newState
  }),
  on(updateTodo, (state, { todo }) => {
    let newState =  {
      ...state,
      todos : state.todos.map((todoItem) => {
        if (todoItem.id === todo.id) {
          return {
            ...todoItem,
            isCompleted: !todoItem.isCompleted
          }
        }
        return todoItem;
      })
    }

    console.log('Nouvelle version du state', newState);

    return newState

  }),
  on(deleteTodo, (state, { todo }) => {
    let newState = {
      ...state,
      todos: state.todos.filter((todoItem) => todoItem.id !== todo.id)
    }
    console.log('Nouvelle version du state', newState);
    return newState
  })

);

