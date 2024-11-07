import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'Small Business';
  
  products: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.loadProducts();
  }

  loadProducts(): void {
    this.apiService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error(`Error fetching products`, error);
      } 
    );
  }
}
