import { Injectable } from '@angular/core';
import {createTodo, Todo} from "./todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    createTodo("One"),
    createTodo("Two"),
    createTodo("Three"),
    createTodo("Four"),
    createTodo("Five"),
  ]

  constructor() { }

}
