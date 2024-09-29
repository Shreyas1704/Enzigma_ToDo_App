import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'your-api-url'; // Set your API URL here

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/users'); // Adjust as needed
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/users', user); // Adjust as needed
  }
}
