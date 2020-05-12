import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterLoginService } from './register-login.service'
import { UserLoginData } from '../../core/models/userAuthKey';

// import { UserLoginData } from 'src/app/core/models/userAuthKey'


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
// intercept(req,next){
    let authService = req;
    console.log(UserLoginData.getUserSetting());
    //console.log(authService.getToken());
    const token = UserLoginData.getUserSetting();
    authService = req.clone({
      headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
    })
    return next.handle(authService);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
];
