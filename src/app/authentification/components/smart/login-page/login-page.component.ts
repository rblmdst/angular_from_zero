import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { LoginData } from '../../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  private authServ = inject(AuthenticationService);
  private router = inject(Router);

  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  message: null | string = null;

  onSubmit() {
    const { email, password } = this.form.value;
    const data = { email, password };
    this.authServ.login(data as LoginData).subscribe({
      next: ({ token }) => {
        this.authServ.saveAuthToken(token);
        this.router.navigate(['/employees']);
      },
      error: ({ error }) => {
        console.log(error.error);
        this.message = error.error;
      },
    });
  }
}
