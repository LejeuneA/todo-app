import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

interface ITodoModal {
  currentName: string;
}

@Component({
  selector: 'app-update-todo-dialog',
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './update-todo-dialog.component.html',
  styleUrl: './update-todo-dialog.component.scss',
})
export class UpdateTodoDialogComponent {
  readonly data = inject<ITodoModal>(MAT_DIALOG_DATA);

  public fc = new FormControl(this.data.currentName, [
    Validators.required,
    Validators.minLength(3),
  ]);
}
