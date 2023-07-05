import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';




export const updateTodo = createAction('[Todo] update Todo', props<{ todo : Todo }>());
export const addTodo = createAction('[Todo] add Todo', props<{ todo : Todo }>());
export const deleteTodo = createAction('[Todo] delete Todo', props<{ todo : Todo }>());
export const initTodos = createAction('[Todo] init Todo', props<{ todos : Todo[] }>());
