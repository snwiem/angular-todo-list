import {Component, OnInit} from '@angular/core';
import {TodoService} from "./todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tasker';

  constructor(public todoService: TodoService) {
  }

  ngOnInit(): void {
  }
}
