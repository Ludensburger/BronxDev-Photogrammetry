import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  addUser(user: {name: string; email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  loginUser(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/login`, credentials);
  }
}
