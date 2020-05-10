import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {

  private _registerUrl = "http://localhost:51050/api/auth/Register";
  constructor( private httpclint:HttpClient ) {  }

  registerUser(user){
    return this.httpclint.post<any>(this._registerUrl, user);
  }
}
