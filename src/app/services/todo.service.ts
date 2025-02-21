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
  private _list: ITodo[] = [];

  private readonly LOCAL_STORAGE_KEY = 'TODOS';

  constructor() {
    const existingTodos = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (existingTodos) {
      this._list = JSON.parse(existingTodos);
    }
  }

  public getList(): ITodo[] {
    return this._list;
  }

  public getItemById(id: string): ITodo | undefined {
    return this._list.find((todo) => todo.id === id);
  }

  public create(data: ITodo): void {
    this._list.push(data);
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this._list));
  }

  public deleteTodo(id: string): void {
    this._list = this._list.filter((todo) => todo.id !== id);
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this._list));
  }

  public updateTodo(data: ITodo): void {
    const todo = this.getItemById(data.id);
    if (todo) {
      todo.name = data.name;
      todo.isDone = data.isDone;
    }
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this._list));
  }
}
