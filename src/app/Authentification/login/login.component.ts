import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      if (
        formData.email === 'amine@chawki.com' &&
        formData.password === 'admin1234'
      ) {
        console.log('Login successful');
        localStorage.setItem('authToken', 'myToken'); // Replace with real token

        this.router.navigate(['/acceuil']);
      } else {
        console.log('Try again');
      }
    }
  }
}
