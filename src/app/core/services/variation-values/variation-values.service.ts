import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VariationValuesService {

  private apiUrl = environment.apiUrl;

  private token = this.authService.isAuthenticated();

  private options = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient, private authService: AuthService) { }

  getSubCategoryVariationTypes(sub_category_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/sub-categories/${sub_category_id}/variations`, this.options);
  }

  postSubCategoryVariationTypes(variation: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/variations`, variation, this.options);
  }

  updateSubCategoryVariationTypes(variation: any, variation_id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/variations/${variation_id}`, variation, this.options);
  }

  deleteSubCategoryVariationTypes(variation_id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/variations/${variation_id}`, this.options);
  }

}
