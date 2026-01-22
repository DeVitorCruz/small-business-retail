import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { Credentials } from '../credentials';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { Authority } from '../authority';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule,
    NgFor
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {  
  
  name: string = '';
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';

  @ViewChild('dropdown') dropdown?: ElementRef;

  authorities: Authority[] = [
    {
      id: 1,
      responsibility: 'owner'
    },
    {
      id: 2,
      responsibility: 'employee'
    }
  ]

  user: Credentials = { email: '', password: ''};

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {

    if (this.password !== this.passwordConfirmation) {
      console.error('Passwords to not match');
      return;
    }

    this.user.name = this.name;
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.password_confirmation = this.passwordConfirmation;
    this.user.role = this.dropdown?.nativeElement.value;

    this.authService.register(this.user).subscribe({
      next: (response) => {
        console.log('Registration successful: ', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed: ', error);
      }
    });
  }

  whichAuthorityIsSelected(): void {

    this.user.role = this.dropdown?.nativeElement.value;

    console.log(this.user.role);

  }

}
