import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPriorityComponent } from './todo-priority/todo-priority.component';
import { TodoStatusComponent } from './todo-status/todo-status.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoPriorityComponent,
    TodoStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
