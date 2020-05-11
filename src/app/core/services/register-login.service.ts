import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {

  private _registerUrl = "http://localhost:51050/api/auth/Register";
  private _loginUrl = "http://localhost:51050/api/auth/Login";
  
  constructor( private httpClient:HttpClient ) {  }

  registerUser(user){
    return this.httpClient.post<any>(this._registerUrl, user);
  }

  loginUser(user){
    return this.httpClient.post<any>(this._loginUrl, user);
  }
}
