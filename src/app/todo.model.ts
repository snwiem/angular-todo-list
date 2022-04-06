import { v4 as uuid } from 'uuid';

export enum TodoStatus {
  Open, Active, Closed
}

export enum TodoPriority {
  None, Low, Medium, High
}

export interface Todo {
  id: string,
  title: string,
  status: TodoStatus,
  priority: TodoPriority,
}

export function createTodo(title: string): Todo {
  return {
    id: uuid(),
    title: title,
    status: TodoStatus.Open,
    priority: TodoPriority.None
  };
}
