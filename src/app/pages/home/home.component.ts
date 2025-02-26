import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TodoListComponent } from '../../todo-list/todo-list.component';
import { StringHelper } from '../../helpers/string.helper';
import { ITodo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-home',
  imports: [
    TodoListComponent,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
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

  public updateTodo(todo: ITodo): void {
    this.todoService.updateTodo(todo);
    this.todos = this.todoService.getList();
  }

  public toggleDone(id: string): void {
    const todo = this.todoService.getItemById(id);
    if (todo) {
      todo.isDone = !todo.isDone;
      this.todoService.updateTodo(todo);
      this.todos = this.todoService.getList();
    }
  }
}
