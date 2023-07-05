import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo } from 'src/app/actions/todo.action';
import { IStore } from 'src/app/stores';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.scss']
})
export class FormTodoComponent {

  title! : string;
  content! : string;

  constructor(private store: Store<IStore>) {
  }

  ngOnInit(): void {
  }

  onSubmit(event:any) {
    event.preventDefault();
    console.log("submit", this.title, this.content);
    let newTodo = {
      id: 3,
      title: this.title,
      content: this.content,
      isCompleted: false
    }

    this.store.dispatch(addTodo({todo: newTodo}))
    this.title = '';
    this.content = '';
  }

}
