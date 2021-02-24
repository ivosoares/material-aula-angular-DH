import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserResponse } from '../models/userResponse';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = "http://localhost:3000/users";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  // CRUD - CREATE/READ/UPDATE/DELETE

  // Retorna a lista de usuarios
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // Retorna o usuario de acordo com o id
  getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/${id}`);
  }

  // Cadastra um novo usuario
  postUser(user: User):Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

  // Deleta um usuario de acordo com o id
  deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(this.apiUrl + '/' + id);
  }

  // Atualiza o usuario de acordo com o id
  updateUser(id: string, user: User):Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/${id}`, user, this.httpOptions);
  }
}
