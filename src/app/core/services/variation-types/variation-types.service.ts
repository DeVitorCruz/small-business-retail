import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariationTypesService {

  private apiUrl = environment.apiUrl;

  private token = this.authService.isAuthenticated();

  private options = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllVariationTypes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/variation-types`, this.options);
  }

  getVariationType(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/variation-types/${id}`, this.options);
  }

  postVariationType(variationType: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/variation-types`, variationType, this.options);
  }

  updateVariationType(variationType: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/variation-types/${variationType.id}`, variationType, this.options);
  }

  deleteVariationType(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/variation-types/${id}`, this.options);
  }

}
