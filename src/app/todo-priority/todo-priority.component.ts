import {Component, Input, OnInit} from '@angular/core';
import {Todo, TodoPriority} from "../todo.model";

@Component({
  selector: 'app-todo-priority',
  templateUrl: './todo-priority.component.html',
  styleUrls: ['./todo-priority.component.scss']
})
export class TodoPriorityComponent implements OnInit {

  @Input()
  priority: TodoPriority;
  priorityText: string;
  priorityClass: string;

  constructor() {
  }

  ngOnInit(): void {
    switch (this.priority) {
      case TodoPriority.High:
        this.priorityClass ='bg-danger';
        this.priorityText = 'High';
        break;
      case TodoPriority.Medium:
        this.priorityClass ='bg-warning';
        this.priorityText = 'Medium';
        break;
      case TodoPriority.Low:
        this.priorityClass ='bg-success';
        this.priorityText = 'Low';
        break;
      default:
        this.priorityClass = '';
        this.priorityText = '';
    }
  }

}
