import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import{ExpenseComponent}from './components/expense/expense.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
   ExpenseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
