import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = environment.apiUrl;

  private token = this.authService.isAuthenticated();

  private options = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient, private authService: AuthService) { }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`, this.options);
  }

  getProductCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories/products`);
  }

  postCategory(category: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/categories`, category, this.options);
  }

  getCategory(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories/${id}`, this.options);
  }

  updateCategory(category: any, id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/categories/${id}`, category, this.options);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/categories/${id}`, this.options);
  }
}
