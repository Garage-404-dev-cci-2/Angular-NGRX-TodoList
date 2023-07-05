import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, withLatestFrom } from 'rxjs/operators';
import { TodoService } from '../services/todoService/todo.service';
import { IStore } from '../stores';
import { Store } from '@ngrx/store';

@Injectable()
export class TodosEffects {

  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType('[Todo] add Todo'),
    withLatestFrom(this.store.select((state) => state.todoReducer.todos)),
    map((actions : any) => {
      this.todoService.setItem('todos', actions[1]);
    })
  ), { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    private store : Store<IStore>
  ) {}
}
