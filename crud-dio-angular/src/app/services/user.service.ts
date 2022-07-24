import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl='https://sheet.best/api/sheets/42417d7e-25c3-42dc-99fa-f67d11a66e5b'

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private httpClient : HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  postUser(user : User) : Observable<User> {
    return this.httpClient.post<User>(this.apiUrl,user, this.httpOptions);
  }

  deleteUser(id : number) : Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`);
  }
}
