import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component'; 
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    TopNavBarComponent,
    SideBarComponent,
    FooterComponent,
    MainContentComponent,
    MainContentComponent,
    RouterModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  dashboardData: any;

  isSidebarOpen: boolean = true;

  lists: string[] = ['One', 'two', 'three'];
 
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getDashboardData().subscribe({
      next: data => { 
        this.dashboardData = data; 
        console.log(data);
      },
      error: error => {
        console.error('Error loading dashboard data', error);
      }
    });
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;

    console.log(this.isSidebarOpen);

  }

}
