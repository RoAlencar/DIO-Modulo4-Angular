import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl='https://sheet.best/api/sheets/42417d7e-25c3-42dc-99fa-f67d11a66e5b'
  constructor(private httpClient : HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }
}
