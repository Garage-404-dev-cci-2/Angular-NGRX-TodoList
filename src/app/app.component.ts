import { Component } from '@angular/core';
import { IStore } from './stores';
import { Store } from '@ngrx/store';
import { TodoService } from './services/todoService/todo.service';
import { Todo } from './models/todo.model';
import { initTodos } from './actions/todo.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  constructor(private store: Store<IStore>, private todoService: TodoService) {

  }

  ngOnInit(): void {
    // Requete api pour répérere les 200 todos
    let todos : Todo[] = this.todoService.getItem('todos');
    if (todos) {
      this.store.dispatch(initTodos({todos}));
    }


    // Dispatch une Action au réducer pour mettre à jour le store
  }
}
