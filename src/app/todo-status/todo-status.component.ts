import {Component, Input, OnInit} from '@angular/core';
import {TodoPriority, TodoStatus} from "../todo.model";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-status',
  templateUrl: './todo-status.component.html',
  styleUrls: ['./todo-status.component.scss']
})
export class TodoStatusComponent implements OnInit {

  @Input()
  status: TodoStatus;
  statusText: string;
  statusClass: string;

  constructor() { }

  ngOnInit(): void {
    switch (this.status) {
      case TodoStatus.Open:
        this.statusClass ='bg-primary';
        this.statusText = 'Open';
        break;
      case TodoStatus.Active:
        this.statusClass ='bg-info';
        this.statusText = 'Active';
        break;
      case TodoStatus.Closed:
        this.statusClass ='bg-secondary';
        this.statusText = 'Closed';
        break;
      default:
        this.statusClass = '';
        this.statusText = '';
    }
  }

}
