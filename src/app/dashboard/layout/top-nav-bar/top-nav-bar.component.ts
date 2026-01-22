import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-top-nav-bar',
  imports:[
    MatToolbarModule,
    MatIconButton,
    MatFormField,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule
  ],
  standalone:true,
  templateUrl: './top-nav-bar.component.html',
  styleUrl: './top-nav-bar.component.css'
})
export class TopNavBarComponent {
  
  @ViewChild(MatSidenav) sidenav?: MatSidenav;

  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private authService: AuthService, private router: Router) {}

  onToggleSidebar():void {
    this.toggleSidebar.emit()
  }

  toggleLanguage() {
    console.log('The loggleLanguage are working!');
  }

  togllerFullScreen() {
    console.log('The full screen button are working!');
  }

  navigateTo(urlLink: string): void {
    console.log(`This the value ${urlLink}`);
  }

  logout(): void {
    
    this.authService.logout().subscribe({
      next: (response) => {
        console.log('Logout successfull', response);

        localStorage.removeItem('token');
        sessionStorage.clear();

        document.cookie = 'XSRF-TOKEN=; Max-Age=0; path=/';
        document.cookie = 'laravel_session=; Max-Age=0; path=/';

        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Logout failed: ',error);
      }
    });
  }

}
