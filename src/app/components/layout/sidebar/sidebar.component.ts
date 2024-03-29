import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../customModules/material-module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  constructor(private route: Router) {}
  logout() {
    console.log('Logout function called');
    sessionStorage.removeItem('loggedIn');
    this.route.navigateByUrl('');
  }
}
