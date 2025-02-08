import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { StringHelper } from './helpers/string.helper';
import { ITodo } from './interfaces/todo.interface';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    TodoListComponent,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public todoService = inject(TodoService);
  public todos: ITodo[] = this.todoService.getList();

  // fc est une instance d'un FormControl
  public fc = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  public addItemInList(): void {
    if (this.fc.value) {
      const todo: ITodo = {
        id: StringHelper.getMostlyUniqId(),
        isDone: false,
        name: this.fc.value,
      };

      this.todoService.create(todo);
      this.todos = this.todoService.getList();
      this.fc.reset();
    }
  }

  public removeItemFromList(id: string): void {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getList();
  }

  public setDone(id: string): void {
    const todo = this.todoService.getItemById(id);
    if (todo) {
      todo.isDone = true;
      this.todoService.updateTodo(todo);
      this.todos = this.todoService.getList();
      console.log(this.todos);
    }
  }

  public updateTodoInList(todo: ITodo): void {
    this.todoService.updateTodo(todo);
    this.todos = this.todoService.getList();
  }
}
