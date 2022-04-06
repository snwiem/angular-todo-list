import { Injectable } from '@angular/core';
import {createTodo, Todo} from "./todo.model";
import {BehaviorSubject, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todos = new BehaviorSubject<Todo[]>([]);
  readonly todos = this._todos.asObservable();


  constructor() {
    of([
      createTodo("One One One One One One One One One One One One One One One One One "),
      createTodo("Two"),
      createTodo("Three"),
      createTodo("Four"),
      createTodo("Five"),
    ]).subscribe(todos => this._todos.next(todos));
  }

}
