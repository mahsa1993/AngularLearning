import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  endPoint = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  getuser(): Observable<any> {
    return this.http.get(this.endPoint + 'users');
  }

  addUser(user: User) {
    return this.http.post(this.endPoint + 'users', user);
  }

  updateUser(updatedUser: User, id: number) {
    return this.http.put(`${this.endPoint}users/${id}`, updatedUser);
  }

}
