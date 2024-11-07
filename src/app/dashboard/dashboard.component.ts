import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  dashboardData: any;

  lists: string[] = ['One', 'two', 'three'];
 

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getDashboardData().subscribe({
      next: data => { 
        this.dashboardData = data; 
      },
      error: error => {
        console.error('Error loading dashboard data', error);
      }
    });
  }
}
