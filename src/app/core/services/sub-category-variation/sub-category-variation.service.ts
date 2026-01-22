import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubCategoryVariationService {

  private apiUrl = environment.apiUrl;

  private token = this.authService.isAuthenticated();

  private options = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient, private authService: AuthService) { }

  getSubCategoriesWithVariations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sub-categories-variations`, this.options);
  }

  postSubCategoryVariations(subCategoryVariation: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sub-categories-variations`, subCategoryVariation, this.options);
  }

  putSubCategoryVariations(subCategoryVariation: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/sub-categories-variations`, subCategoryVariation, this.options);
  }

  deleteSubCategoryVariations(subCategoryVariation: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/sub-categories-variations/${subCategoryVariation.id}`, this.options);
  }

}
