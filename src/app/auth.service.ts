import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  base  = environment.base;

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(`${this.base}users`);
  }

  registerUser(user: any){
    return this.http.post(`${this.base}register`, user);
  }

  loginUser(user: any){
    return this.http.post(`${this.base}login`, user);
  }

  getCategories(){
    return this.http.get(`${this.base}categories`);
  }

  closeSession(){
    return this.http.post(`${this.base}logout`, '');
  }
}
