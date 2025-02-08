import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { ITodo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ], // ✅ Add CommonModule
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input() public todoList: ITodo[] = [];

  @Output() public onDeleteTodo = new EventEmitter<string>();
  @Output() public onTodoDone = new EventEmitter<string>();
  @Output() public onUpdateTodo = new EventEmitter<ITodo>();

  public editTodo(todo: ITodo): void {
    todo.isEditing = true;
  }

  public saveEdit(todo: ITodo): void {
    todo.isEditing = false;
    this.onUpdateTodo.emit(todo);
  }

  public toggleDone(todo: ITodo): void {
    todo.isDone = !todo.isDone; // Toggle status
    this.onTodoDone.emit(todo.id); // Emit the event with the todo ID
  }
}
