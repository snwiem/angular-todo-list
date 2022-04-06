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
  created: Date,
}

export function createTodo(title: string): Todo {
  return {
    id: uuid(),
    title: title,
    status: getRandomInt(0, 2),
    priority: getRandomInt(0, 3),
    created: new Date(),
  };
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
