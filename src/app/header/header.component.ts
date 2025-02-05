import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [MatListModule, MatIconModule, MatIconButton],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class HeaderComponent {}
