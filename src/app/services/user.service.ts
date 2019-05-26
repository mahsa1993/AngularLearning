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

  getuser(): Observable<User[]> {
    return this.http.get<User[]>(this.endPoint + 'users');
  }

  addUser(user: User) {
    return this.http.post(this.endPoint + 'users', user);
  }

  updateUser(updatedUser: User, id: number): Observable<{}> {
   return this.http.post(this.endPoint + id, updatedUser);
  }
  // UserService.fetch('https://jsonplaceholder.typicode.com/posts/1', {
  //   method: 'PUT',
  //   body: JSON.stringify({     
  //   }) 
  // })
  // .then(response => response.json())
  // .then(json => console.log(json))
}
