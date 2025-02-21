import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ITodo } from '../interfaces/todo.interface';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTodoDialogComponent } from '../update-todo-dialog/update-todo-dialog.component';

@Component({
  selector: 'app-todo-list',
  imports: [MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input() public todoList: ITodo[] = [];

  @Output() public onDeleteTodo = new EventEmitter<string>();
  @Output() public onToggleTodoDone = new EventEmitter<string>();
  @Output() public onTodoUpdated = new EventEmitter<ITodo>();

  public readonly dialog = inject(MatDialog);

  public deleteTodo(todo: ITodo): void {
    this.onDeleteTodo.emit(todo.id);
  }

  public openModal(todo: ITodo): void {
    const dialog = this.dialog.open(UpdateTodoDialogComponent, {
      data: {
        currentName: todo.name,
      },
    });

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        todo.name = value;
        this.onTodoUpdated.emit(todo);
      }
    });
  }

  public toggleTodoState(todo: ITodo): void {
    this.onToggleTodoDone.emit(todo.id);
  }
}
