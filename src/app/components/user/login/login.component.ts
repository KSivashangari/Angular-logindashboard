import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  value = 'Clear me';
  hide = true;
  isSignUpMode = false;

  signupForm!: FormGroup;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userid: ['', [Validators.required]],
      username: ['uoy', [Validators.required]],
      emailid: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
      contactno: ['', [Validators.required]],
    });

    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    //restrict access when already logged in
    // const isLoggedIn = sessionStorage.getItem('loggedIn');
    // if (isLoggedIn) {
    //   // Redirect to home if user is already logged in
    //   this.route.navigateByUrl('home');
    // }
  }

  //slide animation
  toggleMode() {
    this.isSignUpMode = !this.isSignUpMode;

    // Reset form control values
    if (this.isSignUpMode) {
      this.signupForm.reset();
    } else {
      this.loginForm.reset();
    }
  }

  getContainerClass() {
    return this.isSignUpMode ? 'container sign-up-mode' : 'container';
  }

  //submit login form
  loginSubmit() {
    if (this.loginForm.invalid) {
      console.log('invalid');
    } else {
      sessionStorage.setItem('loggedIn', 'true');
      this.route.navigateByUrl('home');
    }
  }
}
