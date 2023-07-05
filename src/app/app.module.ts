import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './reducers/todo.reducer';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { StoreObject } from './stores';
import { FormTodoComponent } from './components/form-todo/form-todo.component';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './effects/todo.effects';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    FormTodoComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(StoreObject),
    EffectsModule.forRoot(TodosEffects),

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
