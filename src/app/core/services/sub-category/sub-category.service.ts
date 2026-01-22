import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  private apiUrl = environment.apiUrl;

  private token = this.authService.isAuthenticated();

  private options = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllSubCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sub-categories`, this.options);
  }

  getProductsCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sub-categories/products`, this.options);
  }

  postSubCategory(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sub-categories`, product, this.options);
  }

  getSubCategory(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/sub-categories/${id}`, this.options);
  }

  putSubCategory(id: number, subCategory: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/sub-categories/${id}`, subCategory, this.options);
  }

  deleteSubCategory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/sub-categories/${id}`, this.options);
  }

}
