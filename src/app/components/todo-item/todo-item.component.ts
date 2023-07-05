import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { IStore } from 'src/app/stores';
import { Store } from '@ngrx/store';
import { deleteTodo, updateTodo } from 'src/app/actions/todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo! : Todo;

  constructor(private store: Store<IStore>) {
  }

  onToggleTodoComplete(todo: Todo) {
    console.log(todo);
    this.store.dispatch(updateTodo({todo}))
  }

  onDeleteTodo(todo: Todo) {
    console.log('Delete Button');
    this.store.dispatch(deleteTodo({todo}))
  }
}
