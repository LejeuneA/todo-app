import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { HeaderComponent } from './header/header.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    // HeaderComponent,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    TodoListComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public list: string[] = ['TODO 1', 'TODO 2', 'TODO 3', 'TODO 4', 'TODO 5'];

  public fc = new FormControl();

  public deleteItemInList(itemName: string): void {
    this.list = this.list.filter((item) => item !== itemName);
  }

  public addItem(): void {
    this.list.push(this.fc.value);
    this.fc.reset();
  }
}
