import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { LocationStrategy, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular';
}
