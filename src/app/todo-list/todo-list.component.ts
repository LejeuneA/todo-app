import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-todo-list',
  imports: [MatListModule, MatIconModule, MatIconButton],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input() public todolist: string[] = [];

  @Output() public onDeleteItem = new EventEmitter<string>();

  public deleteItem(itemName: string): void {
    this.onDeleteItem.emit(itemName);
  }
}
