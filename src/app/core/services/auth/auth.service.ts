import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private Url = environment.csrfUrl;

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {  
    return this.getCsrfToken().pipe(
      switchMap(() => this.http.post(`${this.apiUrl}/login`, credentials, { withCredentials: true }))
    );
  }

  register(data: any): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(() => this.http.post(`${this.apiUrl}/register`, data, { withCredentials: true }))
    );
  }

  logout(): Observable<any> {

    const token = this.isAuthenticated();

    return this.http.post(`${this.apiUrl}/logout`, {}, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      }),
      withCredentials: true
    });
  }

  isAuthenticated(): boolean {
    // Implement a check based on stored tokens or session state
    return !!localStorage.getItem('token');
  }

  getDashboardData(): Observable<any> {
    
    const token = this.isAuthenticated();
    
    return this.http.get(`${this.apiUrl}/dashboard`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      }),
      withCredentials: true
    });
  }

  getCsrfToken():Observable<any> {
    return this.http.get(`${this.Url}`, { withCredentials: true, responseType: 'text' as 'json' });
  }

}
