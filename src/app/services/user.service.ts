import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  createUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, data);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${id}`, data);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
}
