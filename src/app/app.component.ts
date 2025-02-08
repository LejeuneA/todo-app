import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ITodo } from './interfaces/todo.interface';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    TodoListComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public todos: ITodo[] = [
    { name: 'TODO 1', isDone: false, id: '1' },
    { name: 'TODO 2', isDone: false, id: '2' },
    { name: 'TODO 3', isDone: false, id: '3' },
  ];

  public fc = new FormControl();

  public addItemInList(): void {
    if (this.fc.value) {
      this.todos.push(this.fc.value);
      this.fc.reset();
    }
  }

  public removeItemFromList(id: string): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
