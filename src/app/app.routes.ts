import { Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'login',
  },
  { path: 'home', component: SidebarComponent, title: 'Home' },
];
