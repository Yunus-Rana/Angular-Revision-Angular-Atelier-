import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Variables } from './components/variables/variables';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import { Databinding } from './components/databinding/databinding';

@Component({
  imports: [RouterOutlet, Variables, Databinding, RouterLink, RouterOutlet, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ang');
}
