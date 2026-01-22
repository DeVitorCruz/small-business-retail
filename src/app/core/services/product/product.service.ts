import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl;

  private token = this.authService.isAuthenticated();

  private options = {
    headers: new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient, private authService: AuthService) { }


  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`, this.options);
  }

  getVariationsProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/variations`, this.options);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/${id}`,this.options);
  }

  createProduct(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/products`, data,  this.options);
  }

  updateProduct(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/products/${id}`, data, this.options);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/products/${id}`, this.options);
  }

  uploadImage(productId: number, image: File, altText: string): Observable<any> {
    
    const formData = new FormData();

    formData.append('image', image);
    formData.append('alt_text', altText);

    return this.http.post(`${this.apiUrl}/products/${productId}/images`, formData);

  }

}
