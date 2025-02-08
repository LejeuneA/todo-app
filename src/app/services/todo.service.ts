import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/todo.interface';
import { StringHelper } from '../helpers/string.helper';

/**
 * CRUD
 * Create
 * Read
 * Update
 * Delete
 */

@Injectable({
  providedIn: 'root', // service disponible partout dans l'application
})
export class TodoService {
  private _list: ITodo[] = [
    { name: 'TODO 1', isDone: false, id: StringHelper.getMostlyUniqId() },
    { name: 'TODO 2', isDone: false, id: StringHelper.getMostlyUniqId() },
    { name: 'TODO 3', isDone: false, id: StringHelper.getMostlyUniqId() },
  ];

  constructor() {}

  public getList(): ITodo[] {
    return this._list;
  }

  public getItemById(id: string): ITodo | undefined {
    return this._list.find((todo) => todo.id === id);
  }

  public create(data: ITodo): void {
    this._list.push(data);
  }

  public deleteTodo(id: string): void {
    this._list = this._list.filter((todo) => todo.id !== id);
  }

  public updateTodo(data: ITodo): void {
    const todo = this.getItemById(data.id);
    if (todo) {
      todo.name = data.name;
      todo.isDone = data.isDone;
    }
  }
}
