import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }


  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) : any
  {
    return JSON.parse(localStorage.getItem(key)!);
  }

  getAll() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
