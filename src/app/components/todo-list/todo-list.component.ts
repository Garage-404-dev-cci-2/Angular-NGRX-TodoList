import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteTodo, updateTodo } from 'src/app/actions/todo.action';
import { Todo } from 'src/app/models/todo.model';
import { IStore } from 'src/app/stores';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos! : Todo[]


  constructor(private store: Store<IStore>) {
  }

  ngOnInit(): void {
    this.store.select((state) => state.todoReducer.todos).subscribe((todos) => {
      console.log(todos);
      this.todos = todos;
    })
  }



}
